import { usePreferences } from "../context/usePreferences";
const currentYear = new Date().getFullYear();
export default function Footer() {
  const { t } = usePreferences();
  return (
    <footer className="container footer">
      <a className="wordmark" href="#accueil">
        Chloé<span>.</span>
      </a>
      <p>© {currentYear} Chloé Nguedia</p>
      <a href="#accueil">{t("Retour en haut ↑")} </a>
    </footer>
  );
}
