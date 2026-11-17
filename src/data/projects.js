// Images : remplacer les placeholders par les vraies captures dans public/images/projects/.
// Liens : renseigner githubUrl et projectUrl avec les URLs exactes.
export const projects = [
  {
    id: "pokeledger",
    name: "PokeLedger",
    type: "Mobile · Projet en équipe",
    image: "images/technologies/react.svg",
    imageFit: "technology",
    imageAlt: "Logo React",
    technologies: ["React Native", "TypeScript", "NestJS", "Prisma", "Docker"],
    description:
      "Application de gestion de collections de cartes Pokémon, avec reconnaissance de texte sur les cartes et classement en classeurs virtuels.",
    contribution:
      "Mon travail côté backend porte sur la synchronisation du catalogue avec une API externe et sur l’intégration des données de cartes et de séries avec NestJS et Prisma.",
    githubUrl: null,
    projectUrl: null,
  },
  {
    id: "classement-lnh",
    name: "Classement LNH",
    type: "Mobile · Android",
    image: "images/technologies/android.svg",
    imageFit: "technology",
    imageAlt: "Logo Android",
    technologies: ["Kotlin", "Jetpack Compose", "Room", "WorkManager", "Retrofit", "Firebase"],
    description:
      "Application Android qui présente le classement de la LNH et permet de le consulter hors connexion ou de l’exporter en JSON.",
    contribution:
      "J’ai travaillé sur la synchronisation périodique avec WorkManager, le stockage local avec Room, l’export JSON et les notifications Firebase.",
    githubUrl: null,
    projectUrl: null,
  },
  {
    id: "stellas-promise",
    name: "Stella’s Promise",
    type: "Jeu · Prototype",
    image: "images/technologies/godot.svg",
    imageFit: "technology",
    imageAlt: "Logo Godot",
    technologies: ["Godot", "C#"],
    description:
      "Prototype de jeu en 2D. Stella pilote un vaisseau à altitude fixe et cherche dix étoiles pour sauver son amie.",
    contribution:
      "J’ai conçu la boucle de jeu et le niveau spatial, puis travaillé sur le système de santé du joueur et des ennemis en C#.",
    githubUrl: null,
    projectUrl: null,
  },
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
    name: "BingoChat",
    type: "Bureau et mobile · Communication",
    image: "images/projects/chat-placeholder.svg",
    imagePlaceholder: true,
    imageAlt: "Emplacement de la future capture de l’application de clavardage",
    technologies: ["Electron", "React", "React Native", "Expo", "Node.js", "Express", "Redis"],
    description:
      "Messagerie multiplateforme avec une application de bureau Electron et une version mobile réalisée avec React Native et Expo.",
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
