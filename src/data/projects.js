// Images : remplacer les placeholders par les vraies captures dans public/images/projects/.
// Liens : renseigner githubUrl et projectUrl avec les URLs exactes.
export const projects = [
  {
    id: "sheet-happens",
    name: "Sheet Happens",
    type: "Web · Projet en équipe",
    image: "images/projects/sheet-placeholder.svg",
    imagePlaceholder: true,
    imageAlt: "Emplacement de la future capture de Sheet Happens",
    technologies: ["Laravel", "React", "MySQL"],
    description:
      "Application Web full-stack permettant de créer, sauvegarder et gérer des personnages de Donjons & Dragons.",
    contribution:
      "Mon travail comprend notamment la logique métier liée aux classes et aux races, les modèles et relations de données et l’application de leurs effets sur les personnages. Projet réalisé en équipe.",
    githubUrl: null,
    projectUrl: null,
  },
  {
    id: "clavardage",
    name: "Application de clavardage",
    type: "Desktop · Communication",
    image: "images/projects/chat-placeholder.svg",
    imagePlaceholder: true,
    imageAlt: "Emplacement de la future capture de l’application de clavardage",
    technologies: ["Electron", "React", "JavaScript", "Node.js", "Express", "Redis"],
    description: "Application desktop multiplateforme de clavardage.",
    contribution:
      "L’application utilise un backend Node.js avec Express et Redis pour les communications en temps réel.",
    githubUrl: null,
    projectUrl: null,
  },
  {
    id: "dames",
    name: "Jeu de dames mobile",
    type: "Mobile · Android",
    image: "images/projects/checkers-placeholder.svg",
    imagePlaceholder: true,
    imageAlt: "Emplacement de la future capture du jeu de dames mobile",
    technologies: ["Java", "Android Studio"],
    description: "Application mobile Android reproduisant un jeu de dames.",
    contribution:
      "Gestion de l’interface, des interactions, des règles et de l’état de la partie.",
    githubUrl: null,
    projectUrl: null,
  },
  {
    id: "client-serveur",
    name: "Applications client-serveur",
    type: "Réseaux · Communications",
    image: "images/projects/network-placeholder.svg",
    imagePlaceholder: true,
    imageAlt:
      "Emplacement des futures captures des applications client-serveur",
    technologies: ["C#", "TCP/UDP", "WebSocket", "FTP/FTPS"],
    description:
      "Différents projets mettant en pratique les communications client-serveur.",
    contribution:
      "Mise en pratique des sockets, des protocoles réseau et des communications sécurisées.",
    githubUrl: null,
    projectUrl: null,
  },
];
