import { usePreferences } from "../context/usePreferences";
import { skills } from "../data/skills";
import Icon from "./Icon";
function SkillCard({ skill }) {
  const { t } = usePreferences();
  return (
    <article className="skill-card">
      <Icon name={skill.icon} />
      <h3>{t(skill.name)}</h3>
      <ul className="technology-list">
        {skill.technologies.map((technology) => (
          <li key={technology}>{t(technology)}</li>
        ))}
      </ul>
      <div className="technology-logos">
        {skill.logos.map(([file, label]) => (
          <img
            key={file}
            src={`${import.meta.env.BASE_URL}images/technologies/${file}.svg`}
            alt={label}
            title={label}
            width="32"
            height="32"
            loading="lazy"
          />
        ))}
      </div>
    </article>
  );
}
export default function Skills() {
  const { t } = usePreferences();
  return (
    <section
      id="competences"
      className="section skills-section"
      aria-labelledby="skills-title"
    >
      <div className="container">
        <p className="eyebrow">{t("Compétences")} </p>
        <h2 id="skills-title">{t("Technologies que j’utilise")} </h2>
        <p className="section-intro">
          {t(
            "Des technologies explorées dans ma formation et mes projets. Mon expérience varie selon les outils et continue de se développer avec la pratique.",
          )}{" "}
        </p>
        <div className="skills-grid">
          {skills.slice(0, 6).map((skill) => (
            <SkillCard skill={skill} key={skill.name} />
          ))}
        </div>
        <details className="additional-skills">
          <summary>
            {t("Voir aussi : IoT, autres langages et jeux")}{" "}
            <span aria-hidden="true">+</span>
          </summary>
          <div className="skills-grid extra-skills">
            {skills.slice(6).map((skill) => (
              <SkillCard skill={skill} key={skill.name} />
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}
