# site-erika

Site vitrine Nuxt 4 pour Erika Diaz de Cerio - Magnétiseuse à Hendaye

## Stack

- Nuxt 4
- Vue 3 (Composition API, `<script setup>`)
- Tailwind CSS
- TypeScript

## Setup

```bash
npm install
npm run dev
```

## Structure

```
app/
├── app.vue              # Entry point
├── components/
│   ├── home/            # Homepage components
│   ├── layout/          # Header, Footer
│   └── ui/              # Generic UI components
├── composable/          # Composables
├── layouts/
│   └── default.vue      # Default layout (uses <slot />)
└── pages/               # Auto-routing
    ├── index.vue
    ├── a-propos.vue
    ├── mes-pratiques.vue
    ├── tarifs.vue
    ├── contact.vue
    └── avis.vue
```

## Tailwind config

Couleurs custom dans `tailwind.config.ts` :

- `sage` : `#8FAF97` (dark: `#6E8B78`, light: `#EEF2EF`)
- `sand` : `#E8E2D9` (light: `#FAF7F2`)
- `coffee` : `#6B635A`
- `terracotta` : `#C99A84`

Border radius custom : `xl` (12px), `2xl` (20px)

## Scripts

- `npm run dev` - Dev server
- `npm run build` - Production build
- `npm run generate` - Static generation
- `npm run preview` - Preview production build

## Déploiement

Le site est configuré pour la génération statique. Voir **[DEPLOYMENT.md](./DEPLOYMENT.md)** pour les solutions d'hébergement.

**Solutions recommandées :**
- **Netlify** (⭐ Le plus simple) - Configuration automatique
- **Vercel** (⭐ Excellent pour Nuxt) - Détection automatique
- **Cloudflare Pages** (⭐ Gratuit et performant) - CDN rapide

Les fichiers de configuration sont déjà présents :
- `netlify.toml` - Configuration Netlify
- `vercel.json` - Configuration Vercel
- `.github/workflows/deploy.yml` - GitHub Pages (si besoin)

## Notes

- Nuxt 4 utilise la structure `app/` (pas de `pages/` ou `layouts/` à la racine)
- Le layout utilise `<slot />`, pas `<NuxtPage />` (c'est `app.vue` qui gère `<NuxtPage />`)
- Tailwind scanne `app//*.{vue,js,ts}`
