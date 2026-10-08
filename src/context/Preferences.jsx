import { useEffect, useState } from "react";
import { english, metadata } from "../data/translations";
import { PreferencesContext } from "./usePreferences";
function savedPreference(key, fallback, valid) {
  try {
    const value = localStorage.getItem(key);
    return valid.includes(value) ? value : fallback;
  } catch {
    return fallback;
  }
}
export function PreferencesProvider({ children }) {
  const [language, setLanguage] = useState(() =>
    savedPreference("portfolio-language", "fr", ["fr", "en"]),
  );
  const [theme, setTheme] = useState(() =>
    savedPreference(
      "portfolio-theme",
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light",
      ["dark", "light"],
    ),
  );
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0d1b2d" : "#0078ca");
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch {
      /* Navigation privée : conserver la préférence en mémoire. */
    }
  }, [theme]);
  useEffect(() => {
    document.documentElement.lang = language === "fr" ? "fr-CA" : "en-CA";
    document.title = metadata[language].title;
    for (const [selector, content] of [
      ['meta[name="description"]', metadata[language].description],
      ['meta[property="og:title"]', metadata[language].title],
      ['meta[property="og:description"]', metadata[language].description],
      ['meta[property="og:locale"]', language === "fr" ? "fr_CA" : "en_CA"],
    ])
      document.querySelector(selector)?.setAttribute("content", content);
    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      /* Préférence en mémoire si le stockage est indisponible. */
    }
  }, [language]);
  const t = (text) => (language === "en" ? english[text] || text : text);
  return (
    <PreferencesContext.Provider
      value={{ language, setLanguage, theme, setTheme, t }}
    >
      {children}
    </PreferencesContext.Provider>
  );
}
