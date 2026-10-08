import { usePreferences } from "../context/usePreferences";
const education = [
  {
    date: "2023",
    title: "Baccalauréat scientifique — Mention Bien",
    school: "Lycée Bilingue de Nylon Ndogpassi",
    location: "Douala, Cameroun",
  },
  {
    date: "2024 – 2027",
    title: "Techniques de l’informatique (420.B0)",
    school: "Cégep de Saint-Jean-sur-Richelieu",
    location: "Saint-Jean-sur-Richelieu, Québec",
    note: "Finissante, 3e année. Stage prévu : hiver 2027.",
  },
];
export default function Education() {
  const { t } = usePreferences();
  return (
    <section
      id="parcours"
      className="section education-section"
      aria-labelledby="education-title"
    >
      <div className="container">
        <p className="eyebrow">{t("Parcours")} </p>
        <h2 id="education-title">{t("Mon parcours académique")} </h2>
        <ol className="timeline">
          {education.map((item) => (
            <li key={item.date}>
              <p className="timeline-date">{item.date}</p>
              <h3>{t(item.title)}</h3>
              <p>
                {item.school}
                <br />
                {t(item.location)}
              </p>
              {item.note && <p className="timeline-note">{t(item.note)}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
