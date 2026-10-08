import { useEffect, useRef, useState } from "react";
import { CvLink } from "./Links";
import Icon from "./Icon";
import PreferencesControls from "./PreferencesControls";
import { usePreferences } from "../context/usePreferences";
const links = [
  ["accueil", "Accueil"],
  ["a-propos", "À propos"],
  ["competences", "Compétences"],
  ["projets", "Projets"],
  ["parcours", "Parcours"],
  ["contact", "Contact"],
];
export default function Navbar() {
  const { t } = usePreferences();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onOutside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onOutside);
    };
  }, [open]);
  return (
    <header className="site-header" ref={header}>
      <div className="container navbar">
        <a
          href="#accueil"
          className="wordmark"
          aria-label={t("Chloé, accueil")}
          onClick={() => setOpen(false)}
        >
          Chloé<span>.</span>
        </a>
        <PreferencesControls />
        <button
          className="menu-toggle"
          ref={toggle}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="navigation"
          aria-label={t(open ? "Fermer le menu" : "Ouvrir le menu")}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
        <nav
          id="navigation"
          aria-label={t("Navigation principale")}
          className={open ? "nav-content is-open" : "nav-content"}
        >
          <ul>
            {links.map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} onClick={() => setOpen(false)}>
                  {t(label)}
                </a>
              </li>
            ))}
          </ul>
          <CvLink />
        </nav>
      </div>
    </header>
  );
}
