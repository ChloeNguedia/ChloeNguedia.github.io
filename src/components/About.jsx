import { usePreferences } from "../context/usePreferences";
import Icon from "./Icon";
const facts = [
  [
    "cap",
    "Finissante, 3e année",
    "Techniques de l’informatique au Cégep de Saint-Jean-sur-Richelieu",
  ],
  ["target", "Stage recherché", "Hiver 2027"],
  [
    "bulb",
    "Centres d’intérêt",
    "Développement Web, mobile, solutions client-serveur, IA",
  ],
  [
    "users",
    "Approche",
    "Curiosité, rigueur, collaboration, résultats concrets",
  ],
];
export default function About() {
  const { t } = usePreferences();
  return (
    <section id="a-propos" className="section" aria-labelledby="about-title">
      <div className="container about-grid">
        <div>
          <p className="eyebrow">{t("À propos")} </p>
          <h2 id="about-title">{t("Mon parcours")} </h2>
          <p>
            {t(
              "Je suis finissante en Techniques de l’informatique au Cégep de Saint-Jean-sur-Richelieu et je recherche un stage pour l’hiver 2027. Ma formation m’a permis de travailler sur le développement Web, mobile et desktop, les bases de données, les réseaux et la programmation système. J’aime apprendre, résoudre des problèmes et travailler sur des projets concrets, seule ou en équipe.",
            )}{" "}
          </p>
        </div>
        <div className="facts">
          {facts.map(([icon, title, text]) => (
            <div className="fact" key={title}>
              <span className="icon-disc">
                <Icon name={icon} />
              </span>
              <div>
                <h3>{t(title)}</h3>
                <p>{t(text)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
