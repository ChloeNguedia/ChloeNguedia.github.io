import { usePreferences } from "../context/usePreferences";
export default function PreferencesControls() {
  const { language, setLanguage, theme, setTheme, t } = usePreferences();
  return (
    <div className="preferences-controls">
      <label className="language-control">
        <span className="sr-only">{t("Choisir la langue")}</span>
        <select
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        >
          <option value="fr" lang="fr">
            FR
          </option>
          <option value="en" lang="en">
            EN
          </option>
        </select>
      </label>
      <button
        type="button"
        className="theme-toggle"
        aria-pressed={theme === "dark"}
        aria-label={t(
          theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre",
        )}
        title={t(
          theme === "dark" ? "Activer le mode clair" : "Activer le mode sombre",
        )}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <svg
          viewBox="0 0 24 24"
          className="icon"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        >
          {theme === "dark" ? (
            <>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
            </>
          ) : (
            <path d="M21 13a9 9 0 1 1-10-10 7 7 0 0 0 10 10Z" />
          )}
        </svg>
      </button>
    </div>
  );
}
