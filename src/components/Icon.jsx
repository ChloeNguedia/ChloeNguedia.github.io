const paths = {
  arrow: "M5 12h14m-6-6 6 6-6 6",
  download: "M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4",
  monitor: "M3 4h18v13H3zM8 21h8m-4-4v4",
  server: "M3 3h18v7H3zM3 14h18v7H3zM7 6h.01M7 17h.01M11 6h6m-6 11h6",
  phone: "M7 2h10v20H7zM11 18h2",
  database:
    "M4 6c0-5 16-5 16 0s-16 5-16 0m0 0v12c0 5 16 5 16 0V6M4 12c0 5 16 5 16 0",
  network:
    "M7 7l10 5-10 5M7 7a3 3 0 1 0-6 0 3 3 0 0 0 6 0m16 5a3 3 0 1 0-6 0 3 3 0 0 0 6 0M7 17a3 3 0 1 0-6 0 3 3 0 0 0 6 0",
  settings:
    "M12 3v3m0 12v3M3 12h3m12 0h3M5.6 5.6l2.1 2.1m8.6 8.6 2.1 2.1M5.6 18.4l2.1-2.1m8.6-8.6 2.1-2.1M16 12a4 4 0 1 0-8 0 4 4 0 0 0 8 0",
  chip: "M6 6h12v12H6zM9 9h6v6H9zM9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4",
  code: "M8 6l-6 6 6 6m8-12 6 6-6 6m-3-16-2 20",
  game: "M8 7h8c5 0 7 12 4 13-2 1-4-4-5-4H9c-1 0-3 5-5 4C1 19 3 7 8 7m-2 4v5m-2-2h4m8-2h.01m3 3h.01",
  cap: "M2 8l10-5 10 5-10 5-10-5m4 2v7c4 3 8 3 12 0v-7m4-2v8",
  target: "M21 12a9 9 0 1 1-9-9m5 9a5 5 0 1 1-5-5m0 5 9-9m-5 0h5v5",
  bulb: "M9 18h6m-6 3h6M8 14a6 6 0 1 1 8 0l-1 3H9z",
  users:
    "M16 21v-3c0-5-14-5-14 0v3m12-13a4 4 0 1 1-8 0 4 4 0 0 1 8 0m3-3c5 0 5 6 1 7m1 2c4 0 4 4 4 7",
  mail: "M3 5h18v14H3zM3 5l9 8 9-8",
  pin: "M19 10c0 5-7 12-7 12S5 15 5 10a7 7 0 1 1 14 0m-4 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
  github:
    "M9 19c-5 2-5-3-7-3m14 6v-4c0-1-.3-2-1-3 4-.5 6-2 6-6 0-2-.6-3-2-4 .4-1 .4-2 0-3-2 0-3 1-4 1a14 14 0 0 0-6 0C8 2 7 2 5 2c-.4 1-.4 2 0 3-1 1-2 2-2 4 0 4 2 5.5 6 6-.7 1-1 2-1 3v4",
  linkedin: "M4 9v12m0-17v.01M10 21V9m0 5c0-7 10-7 10 0v7",
  menu: "M4 6h16M4 12h16M4 18h16",
  close: "M6 6l12 12M6 18 18 6",
};
export default function Icon({ name }) {
  return (
    <svg
      className="icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={paths[name] || paths.code} />
    </svg>
  );
}
