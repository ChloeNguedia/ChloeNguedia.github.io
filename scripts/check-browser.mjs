// Vérification locale sans dépendance : Chrome + protocole DevTools.
import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
const profile = fs.mkdtempSync(path.join(os.tmpdir(), "chloe-browser-"));
const chrome = spawn(
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  [
    "--headless=new",
    "--disable-gpu",
    "--no-first-run",
    "--remote-debugging-port=9337",
    `--user-data-dir=${profile}`,
    "about:blank",
  ],
  { windowsHide: true, stdio: "ignore" },
);
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let socket;
try {
  let pages;
  for (let attempt = 0; attempt < 30; attempt++) {
    try {
      pages = await (await fetch("http://127.0.0.1:9337/json")).json();
      break;
    } catch {
      await pause(300);
    }
  }
  if (!pages) throw new Error("Chrome indisponible");
  socket = new WebSocket(
    pages.find((p) => p.type === "page").webSocketDebuggerUrl,
  );
  await new Promise((resolve) =>
    socket.addEventListener("open", resolve, { once: true }),
  );
  let id = 0;
  const pending = new Map();
  const errors = [];
  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id) {
      const call = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) call.reject(message.error);
      else call.resolve(message.result);
    }
    if (message.method === "Runtime.exceptionThrown")
      errors.push(message.params.exceptionDetails.text);
  });
  const send = (method, params = {}) =>
    new Promise((resolve, reject) => {
      pending.set(++id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
  const evaluate = async (expression) =>
    (
      await send("Runtime.evaluate", {
        expression,
        returnByValue: true,
        awaitPromise: true,
      })
    ).result.value;
  await send("Runtime.enable");
  await send("Page.enable");
  await send("Page.navigate", { url: "http://127.0.0.1:5173" });
  await pause(1500);
  for (const width of [320, 375, 600, 768, 1024, 1440]) {
    await send("Emulation.setDeviceMetricsOverride", {
      width,
      height: 900,
      deviceScaleFactor: 1,
      mobile: width < 600,
    });
    await pause(150);
    const result = await evaluate(
      `({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,sections:document.querySelectorAll('main section').length,cards:document.querySelectorAll('.project-card').length,columns:getComputedStyle(document.querySelector('.projects-grid')).gridTemplateColumns,brokenImages:[...document.images].filter(i=>i.complete&&!i.naturalWidth).map(i=>i.src)})`,
    );
    console.log(JSON.stringify(result));
    if (result.scrollWidth > width || result.brokenImages.length)
      throw new Error("Responsive ou images invalides");
    if (width === 375) {
      await evaluate("document.querySelector('.menu-toggle').click()");
      if (
        !(await evaluate(
          "document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='true'",
        ))
      )
        throw new Error("Menu fermé");
      await send("Input.dispatchKeyEvent", {
        type: "keyDown",
        key: "Escape",
        code: "Escape",
        windowsVirtualKeyCode: 27,
      });
      await pause(100);
      if (
        await evaluate(
          "document.querySelector('.menu-toggle').getAttribute('aria-expanded')==='true'",
        )
      )
        throw new Error("Échap menu");
    }
  }
  await evaluate("document.querySelector('.project-links button').click()");
  await pause(100);
  if (
    !(await evaluate(
      "!!document.querySelector('dialog[open]') && document.activeElement.classList.contains('dialog-close')",
    ))
  )
    throw new Error("Focus modale");
  await send("Input.dispatchKeyEvent", {
    type: "keyDown",
    key: "Escape",
    code: "Escape",
    windowsVirtualKeyCode: 27,
  });
  await pause(100);
  if (await evaluate("!!document.querySelector('dialog[open]')"))
    throw new Error("Échap modale");
  console.log(
    "Interactions clavier et modale OK. Erreurs JavaScript :",
    errors,
  );
  if (errors.length) throw new Error("Erreurs JavaScript");
  for (const language of ["en", "fr"]) {
    await evaluate(
      `(()=>{const select=document.querySelector('.language-control select');const setter=Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value').set;setter.call(select,'${language}');select.dispatchEvent(new Event('change',{bubbles:true}));})()`,
    );
    await pause(100);
    for (const theme of ["dark", "light"]) {
      await evaluate(
        `if(document.documentElement.dataset.theme!=='${theme}')document.querySelector('.theme-toggle').click()`,
      );
      await pause(100);
      for (const width of [320, 375, 600, 768, 1024, 1440]) {
        await send("Emulation.setDeviceMetricsOverride", {
          width,
          height: 900,
          deviceScaleFactor: 1,
          mobile: width < 600,
        });
        const state = await evaluate(
          `({language:document.documentElement.lang,theme:document.documentElement.dataset.theme,width:innerWidth,scrollWidth:document.documentElement.scrollWidth,title:document.title,hero:getComputedStyle(document.querySelector('.hero-description')).fontSize,project:getComputedStyle(document.querySelector('.project-body>p:not(.project-type)')).fontSize})`,
        );
        if (
          state.scrollWidth > width ||
          state.theme !== theme ||
          !state.language.startsWith(language)
        )
          throw new Error(JSON.stringify(state));
      }
      await evaluate("document.querySelector('.additional-skills').open=true");
      if (language === "en") {
        const text = await evaluate("document.body.innerText");
        if (
          /Télécharger|Compétences|Travaillons|Finissante|Capture à venir|Procédures|Capteurs|clavardage|Mon parcours/.test(
            text,
          )
        )
          throw new Error("Traduction incomplète");
        await evaluate(
          "document.querySelector('.project-links button').click()",
        );
        const content = await evaluate(
          "document.querySelector('dialog[open]').innerText",
        );
        if (!content.includes("My work includes"))
          throw new Error("Fiche non traduite");
        await evaluate("document.querySelector('dialog[open]').close()");
      }
      await send("Page.reload");
      await pause(500);
      if (
        !(await evaluate(
          `document.documentElement.lang.startsWith('${language}')&&document.documentElement.dataset.theme==='${theme}'`,
        ))
      )
        throw new Error("Préférences non persistées");
      console.log(
        `Langue ${language}, thème ${theme}, responsive et persistance OK`,
      );
      if (language === "en" && theme === "dark") {
        await evaluate("Promise.all([...document.images].map(image=>{image.loading='eager';return image.decode().catch(()=>{})}))");
        fs.mkdirSync("artifacts", { recursive: true });
        const shot = await send("Page.captureScreenshot", {
          format: "png",
          captureBeyondViewport: true,
        });
        fs.writeFileSync(
          "artifacts/english-dark.png",
          Buffer.from(shot.data, "base64"),
        );
      }
    }
  }
  await send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await evaluate("window.scrollTo(0,0)");
  await evaluate("Promise.all([...document.images].map(image=>{image.loading='eager';return image.decode().catch(()=>{})}))");
  await pause(300);
  const screenshot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
  });
  fs.mkdirSync("artifacts", { recursive: true });
  fs.writeFileSync(
    "artifacts/desktop.png",
    Buffer.from(screenshot.data, "base64"),
  );
  await send("Emulation.setDeviceMetricsOverride", {
    width: 375,
    height: 812,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await pause(150);
  const mobileShot = await send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: true,
  });
  fs.writeFileSync(
    "artifacts/mobile.png",
    Buffer.from(mobileShot.data, "base64"),
  );
} finally {
  socket?.close();
  chrome.kill();
}
