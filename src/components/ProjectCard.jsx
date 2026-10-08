import { usePreferences } from "../context/usePreferences";
import { useRef } from "react";
import Icon from "./Icon";
export default function ProjectCard({ project }) {
  const { t } = usePreferences();
  const details = useRef(null);
  return (
    <article className="project-card">
      <div className="project-visual">
        <img
          src={`${import.meta.env.BASE_URL}${project.image}`}
          alt={t(project.imageAlt)}
          loading="lazy"
          width="600"
          height="360"
        />
        {project.imagePlaceholder && <span>{t("Capture à venir")} </span>}
      </div>
      <div className="project-body">
        <p className="project-type">{t(project.type)}</p>
        <h3>{t(project.name)}</h3>
        <ul className="badges" aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p>{t(project.description)}</p>
        <div className="project-links">
          {project.projectUrl ? (
            <a
              className="text-link"
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Voir le projet")} <Icon name="arrow" />
            </a>
          ) : (
            <button
              className="text-link"
              onClick={() => details.current?.showModal()}
              aria-label={`Voir le projet : ${t(project.name)}`}
            >
              {t("Voir le projet")} <Icon name="arrow" />
            </button>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="repository-link"
              aria-label={`Code de ${t(project.name)} sur GitHub (nouvel onglet)`}
            >
              <Icon name="github" />
            </a>
          )}
        </div>
      </div>
      <dialog
        ref={details}
        className="project-dialog"
        aria-labelledby={`dialog-title-${project.id}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) details.current.close();
        }}
      >
        <div className="dialog-content">
          <form method="dialog">
            <button
              className="dialog-close"
              aria-label={t("Fermer les détails")}
            >
              <Icon name="close" />
            </button>
          </form>
          <p className="eyebrow">{t(project.type)}</p>
          <h2 id={`dialog-title-${project.id}`}>{t(project.name)}</h2>
          <ul className="badges">
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <p>{t(project.description)}</p>
          <h3>{t("À propos du projet")} </h3>
          <p>{t(project.contribution)}</p>
          {project.githubUrl && (
            <a
              className="text-link"
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Consulter le code sur GitHub")} <Icon name="arrow" />
            </a>
          )}
        </div>
      </dialog>
    </article>
  );
}
