import { usePreferences } from "../context/usePreferences";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
export default function Projects() {
  const { t } = usePreferences();
  return (
    <section id="projets" className="section" aria-labelledby="projects-title">
      <div className="container">
        <p className="eyebrow">{t("Projets")} </p>
        <h2 id="projects-title">{t("Quelques-uns de mes projets")} </h2>
        <p className="section-intro">
          {t(
            "Du Web au mobile, des projets concrets pour apprendre et construire.",
          )}{" "}
        </p>
        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}
