import { usePreferences } from "../context/usePreferences";
import Icon from "./Icon";
import { CvLink, SocialLink } from "./Links";
export default function Hero() {
  const { t, language } = usePreferences();
  return (
    <section id="accueil" className="hero" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="availability">
            <span />
            {t("Disponible pour un stage — Hiver 2027")}{" "}
          </span>
          <h1 id="hero-title">
            Chloé <span>Nguedia</span>
          </h1>
          <p className="hero-subtitle">
            {t("Développeuse Web & logiciel junior")}{" "}
          </p>
          <p className="hero-description">
            {t(
              "Finissante en Techniques de l’informatique, je développe des applications Web, mobiles et desktop ainsi que des solutions client-serveur. J’aime transformer des besoins en solutions concrètes et continuer à apprendre à travers des projets techniques.",
            )}{" "}
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projets">
              {t("Voir mes projets")} <Icon name="arrow" />
            </a>
            <CvLink secondary />
            <SocialLink service="github" />
            <SocialLink service="linkedin" />
          </div>
          <p className="location">
            <Icon name="pin" />
            {t("Saint-Jean-sur-Richelieu, Québec, Canada")}{" "}
          </p>
        </div>
        <div
          className="hero-art hero-art-with-portrait"
        >
          <div className="art-orbit" />
          <div className="code-window">
            <div className="window-bar">
              <span />
              <span />
              <span />
              <small>{language === "en" ? "hello.jsx" : "bonjour.jsx"}</small>
            </div>
            <pre>
              <code>
                <span className="code-muted">01</span>{" "}
                <span className="code-purple">const</span>{" "}
                {language === "en" ? "developer" : "développeuse"} = {"{"}
                {"\n"}
                <span className="code-muted">02</span>{" "}
                {language === "en" ? "name" : "prénom"}:{" "}
                <span className="code-yellow">'Chloé'</span>,{"\n"}
                <span className="code-muted">03</span>{" "}
                {language === "en" ? "ideas" : "idées"}:{" "}
                <span className="code-yellow">
                  {language === "en" ? "'to build'" : "'à construire'"}
                </span>
                ,{"\n"}
                <span className="code-muted">04</span>{" "}
                {language === "en" ? "goal" : "envie"}:{" "}
                <span className="code-yellow">
                  {language === "en" ? "'learn'" : "'apprendre'"}
                </span>
                {"\n"}
                <span className="code-muted">05</span> {"}"}
                {"\n\n"}
                <span className="code-muted">07</span>{" "}
                <span className="code-purple">function</span>{" "}
                {language === "en" ? "create" : "créer"}() {"{"}
                {"\n"}
                <span className="code-muted">08</span>{" "}
                <span className="code-purple">return</span>{" "}
                <span className="code-cyan">
                  {language === "en" ? "useful ideas" : "des idées utiles"}
                </span>
                {"\n"}
                <span className="code-muted">09</span> {"}"}
              </code>
            </pre>
            <div className="code-status">
              <span />
              {t("Toujours en apprentissage")}{" "}
            </div>
          </div>
          <img
            className="hero-cutout"
            src={`${import.meta.env.BASE_URL}images/profile/chloe-detouree.png`}
            alt="Chloé Nguedia"
            width="1254"
            height="1254"
            fetchPriority="high"
          />
          <div className="art-note">
            <span className="note-icon">
              <Icon name="bulb" />
            </span>
            <span>
              {t("Apprendre")} <br />
              {t("Créer")} <br />
              {t("Partager")}{" "}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
