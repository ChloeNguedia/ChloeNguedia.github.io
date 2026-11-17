# Portfolio de Chloé Nguedia

Portfolio en français : React, Vite, JavaScript et CSS. Icônes SVG locales, sans dépendance supplémentaire.

## Commandes

Node.js 22.12+ ou 24+ recommandé.

```sh
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

Déployer le contenu de `dist/` sur un hébergement statique. Pour un sous-chemin, configurer `base` dans `vite.config.js` avant compilation. Les assets utilisent `import.meta.env.BASE_URL`.

## Arborescence

```text
src/
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    ProjectCard.jsx
    Education.jsx
    Contact.jsx
    Footer.jsx
    Icon.jsx
    Links.jsx
  data/
    projects.js
    skills.js
    profile.js
  styles/global.css
  App.jsx
  main.jsx
public/
  images/
    projects/
      illustrations.webp
      bingochat.png
      jeu-de-dames.webp
      sheet-happens-creation.svg
      travelgo.jpg
    profile/README.md
  cv/README.md
  favicon.svg
scripts/check-browser.mjs
index.html
vite.config.js
package.json
package-lock.json
```

## Langue et apparence

Le sélecteur FR/EN traduit l’ensemble de l’interface, les projets, les compétences et les libellés accessibles. Les noms des établissements restent inchangés. `src/data/translations.js` contient le dictionnaire anglais et les métadonnées localisées ; ajouter une traduction ici lors de l’ajout de textes français.

Le bouton lune/soleil active les modes sombre et clair. Au premier accès, le thème suit la préférence système. Les choix de langue et de thème sont enregistrés dans `localStorage` et restent disponibles après rechargement. Le contexte et les contrôles se trouvent dans `src/context/` et `PreferencesControls.jsx`. Les couleurs sombres sont définies par `[data-theme="dark"]` dans `global.css`.

## Assets et liens à compléter

- Exporter le Word fourni en PDF et déposer `public/cv/CV_Chloe_Nguedia.pdf`. Le Word était verrouillé par un autre processus ; aucun PDF n’a été créé. Les boutons de téléchargement nécessitent ce fichier.
- Un vrai portrait peut être ajouté dans `public/images/profile/`, puis intégré dans `Hero.jsx`. Il reste facultatif : le site utilise une illustration abstraite.
- Confirmer le courriel dans `src/data/profile.js` : `nguediachloe@gmail.com` est repris de la référence et n’a pas pu être vérifié dans le Word verrouillé.
- Ajouter les URL exactes dans les champs `githubUrl` des objets `sheet-happens`, `clavardage`, `dames` et `client-serveur` de `src/data/projects.js`. Les liens GitHub restent masqués si la valeur est `null`.
- Renseigner `projectUrl` si une démo existe. Sinon, « Voir le projet » ouvre une fiche descriptive avec les informations fournies.
- Ajouter `og:url` et `og:image` avec des URLs absolues dans `index.html` après choix du domaine et de l’image de partage. Les métadonnées de base sont présentes.

La propriété `imagePosition` sélectionne un quadrant de `illustrations.webp`. Pour utiliser une image individuelle comme `jeu-de-dames.webp`, renseigner `image` et `imageAlt` et omettre `imagePosition`. Chaque projet doit avoir un `id` unique.

Les technologies se modifient dans `skills.js`. Elles sont présentées comme des outils explorés en formation et en projets, sans niveau inventé. Les liens personnels sont centralisés dans `profile.js`. Les variables de `global.css` définissent couleurs, espaces, rayons, ombres et largeur maximale. Les polices Google Fonts disposent d’alternatives sans-serif.

## Vérifications

Compilation Vite et analyse Oxlint. `node scripts/check-browser.mjs` utilise Chrome installé à son emplacement habituel sous Windows et un serveur Vite lancé sur `http://127.0.0.1:5173`. Il vérifie six largeurs de 320 à 1440 px, les images, le menu mobile, Échap, le focus initial et la fermeture du dialogue ainsi que les erreurs JavaScript. Les captures de contrôle sont dans `artifacts/` (ignoré).

Navigation sémantique, lien d’évitement, focus visible, dialogues natifs nommés, alt sur les images et préférence de réduction des animations. Une vérification avec lecteur d’écran reste utile avant publication.
