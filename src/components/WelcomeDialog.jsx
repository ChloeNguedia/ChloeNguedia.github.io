import { useEffect, useRef, useState } from "react";
import { usePreferences } from "../context/usePreferences";

const welcomeKey = "portfolio-welcome-seen";

export default function WelcomeDialog() {
  const dialog = useRef(null);
  const [answer, setAnswer] = useState("");
  const { t } = usePreferences();

  useEffect(() => {
    try {
      if (sessionStorage.getItem(welcomeKey)) return;
    } catch {
      // L’accueil reste disponible si le stockage de session est désactivé.
    }
    const welcome = dialog.current;
    if (welcome && !welcome.open) welcome.showModal();
  }, []);

  function finishWelcome() {
    setAnswer("");
    try {
      sessionStorage.setItem(welcomeKey, "1");
    } catch {
      // La fermeture fonctionne aussi sans stockage de session.
    }
  }

  return (
    <dialog
      ref={dialog}
      className="project-dialog welcome-dialog"
      aria-labelledby="welcome-title"
      aria-describedby="welcome-message"
      onClose={finishWelcome}
    >
      <form method="dialog" className="dialog-content">
        <div className="welcome-ribbon">
          <span className="welcome-sparkle" aria-hidden="true">✦</span>
          <h2 id="welcome-title">{t("Bienvenue !")}</h2>
          <span className="welcome-sparkle" aria-hidden="true">✦</span>
        </div>
        <p id="welcome-message">
          {t("Merci de prendre un moment pour découvrir mon univers. Je suis ravie de vous accueillir et vous souhaite une belle visite !")}
        </p>
        <fieldset className="welcome-question" aria-describedby="welcome-privacy">
          <legend>{t("Êtes-vous ici dans le cadre d’un recrutement ?")}</legend>
          <p id="welcome-privacy">
            {t("Votre réponse est facultative et reste dans cette fenêtre.")}
          </p>
          <label>
            <input type="radio" name="recruiting" checked={answer === "yes"} onChange={() => setAnswer("yes")} />
            {t("Oui")}
          </label>
          <label>
            <input type="radio" name="recruiting" checked={answer === "no"} onChange={() => setAnswer("no")} />
            {t("Non")}
          </label>
        </fieldset>
        <button type="submit" className="button button-primary">
          {t(answer ? "Découvrir le portfolio" : "Continuer sans répondre")}
        </button>
      </form>
    </dialog>
  );
}
