import { usePreferences } from "../context/usePreferences";
import { profile } from "../data/profile";
import { CvLink, SocialLink } from "./Links";
import Icon from "./Icon";
export default function Contact() {
  const { t } = usePreferences();
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <div className="container contact-panel">
        <div className="contact-heading">
          <span className="icon-disc">
            <Icon name="mail" />
          </span>
          <div>
            <p className="eyebrow">{t("Contact")} </p>
            <h2 id="contact-title">{t("Travaillons ensemble !")} </h2>
          </div>
        </div>
        <p className="contact-description">
          {t(
            "Je suis actuellement à la recherche d’un stage en informatique pour l’hiver 2027 et je suis ouverte aux opportunités me permettant de contribuer à des projets concrets tout en poursuivant mon développement professionnel.",
          )}{" "}
        </p>
        <div className="contact-actions">
          <a className="button button-white" href={`mailto:${profile.email}`}>
            <Icon name="mail" />
            {profile.email}
          </a>
          <SocialLink service="linkedin" className="button button-white" />
          <SocialLink service="github" className="button button-white" />
          <CvLink />
        </div>
      </div>
    </section>
  );
}
