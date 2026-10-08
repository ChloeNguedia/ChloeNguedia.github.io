import { usePreferences } from "../context/usePreferences";
import { profile } from "../data/profile";
import Icon from "./Icon";
export function CvLink({ secondary = false }) {
  const { t } = usePreferences();
  return (
    <a
      className={`button ${secondary ? "button-outline" : "button-primary"}`}
      href={profile.cv}
      download
    >
      {t("Télécharger mon CV")} <Icon name="download" />
    </a>
  );
}
export function SocialLink({ service, className = "social-link" }) {
  const { t } = usePreferences();
  return (
    <a
      className={className}
      href={profile[service]}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${service === "github" ? "GitHub" : "LinkedIn"} ${t("de Chloé Nguedia")} (${t("nouvel onglet")})`}
    >
      <Icon name={service} />
      {service === "github" ? "GitHub" : "LinkedIn"}
    </a>
  );
}
