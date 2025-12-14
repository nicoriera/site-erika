# Site Erika Diaz de Cerio

Site vitrine professionnel pour Erika Diaz de Cerio, magnétiseuse et praticienne en soins énergétiques à Hendaye.

## 🚀 Technologies

- **[Nuxt 4](https://nuxt.com/)** - Framework Vue.js avec SSR/SSG
- **[Vue 3](https://vuejs.org/)** - Framework JavaScript progressif
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **TypeScript** - Typage statique pour JavaScript

## 📋 Prérequis

- Node.js >= 18.x
- npm, pnpm, yarn ou bun

## 🛠️ Installation

Installer les dépendances :

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 🏃 Développement

Démarrer le serveur de développement sur `http://localhost:3000` :

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## 🏗️ Structure du projet

```
site-erika/
├── app/
│   ├── app.vue              # Point d'entrée de l'application
│   ├── components/          # Composants Vue réutilisables
│   │   ├── home/            # Composants spécifiques à la page d'accueil
│   │   ├── layout/          # Composants de layout (header, footer)
│   │   └── ui/              # Composants UI génériques
│   ├── composable/          # Composables Vue (logique réutilisable)
│   ├── layouts/             # Layouts de pages
│   │   └── default.vue      # Layout par défaut
│   └── pages/               # Pages de l'application (routing automatique)
│       ├── index.vue        # Page d'accueil
│       ├── a-propos.vue     # Page À propos
│       ├── mes-pratiques.vue # Page Mes pratiques
│       ├── tarifs.vue       # Page Tarifs
│       ├── contact.vue      # Page Contact
│       └── avis.vue         # Page Avis
├── public/                  # Fichiers statiques
├── nuxt.config.ts          # Configuration Nuxt
├── tailwind.config.ts      # Configuration Tailwind CSS
└── package.json            # Dépendances et scripts
```

## 🎨 Configuration Tailwind

Le projet utilise une palette de couleurs personnalisée :

- **Sage** : `#8FAF97` (avec variantes dark et light)
- **Sand** : `#E8E2D9` (avec variante light)
- **Coffee** : `#6B635A`
- **Terracotta** : `#C99A84`

Les classes Tailwind personnalisées sont disponibles dans tous les composants.

## 📦 Build pour la production

Générer une build optimisée pour la production :

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

## 👀 Prévisualisation de la build

Prévisualiser localement la build de production :

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

## 📄 Génération statique

Générer une version statique du site (SSG) :

```bash
# npm
npm run generate

# pnpm
pnpm generate

# yarn
yarn generate

# bun
bun run generate
```

## 🚢 Déploiement

Le site peut être déployé sur différentes plateformes :

- **Netlify** : Déploiement automatique depuis Git
- **Vercel** : Déploiement automatique depuis Git
- **Nuxt Hosting** : Solution hébergée par Nuxt

Consultez la [documentation de déploiement Nuxt](https://nuxt.com/docs/getting-started/deployment) pour plus d'informations.

## 📝 Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Build pour la production
- `npm run generate` - Génère une version statique
- `npm run preview` - Prévisualise la build de production
- `npm run postinstall` - Prépare Nuxt (exécuté automatiquement après installation)

## 🔧 Configuration

### Nuxt

La configuration Nuxt se trouve dans `nuxt.config.ts`. Elle inclut :

- Configuration des modules (Tailwind CSS)
- Métadonnées SEO
- Configuration de l'application

### Tailwind CSS

La configuration Tailwind se trouve dans `tailwind.config.ts`. Elle définit :

- La palette de couleurs personnalisée
- Les valeurs de border-radius personnalisées
- Les chemins de scan pour les classes utilitaires

## 📚 Documentation

- [Documentation Nuxt](https://nuxt.com/docs)
- [Documentation Vue 3](https://vuejs.org/)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)

## 📄 Licence

Ce projet est privé et propriétaire.
