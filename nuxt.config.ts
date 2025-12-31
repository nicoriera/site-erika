// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  i18n: {
    locales: [
      {
        code: "fr",
        iso: "fr-FR",
        file: "fr.json",
        name: "Français",
      },
      {
        code: "es",
        iso: "es-ES",
        file: "es.json",
        name: "Español",
      },
    ],
    lazy: true,
    langDir: "locales",
    defaultLocale: "fr",
    strategy: "prefix_except_default",
    // Désactivé pour la génération statique (peut causer des problèmes)
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: "i18n_redirected",
    //   redirectOn: "root",
    // },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      title: "Erika Diaz de Cerio",
      meta: [
        { name: "description", content: "Erika Diaz de Cerio" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index, follow" },
        { name: "author", content: "Erika Diaz de Cerio" },
        {
          name: "keywords",
          content: "Erika Diaz de Cerio, Magnétiseuse, Hendaye",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://erika-diaz-de-cerio.fr",
    },
  },
  // Optimisation pour la génération statique
  nitro: {
    prerender: {
      crawlLinks: true, // Crawler les liens pour pré-rendre toutes les pages
      routes: [
        '/',
        '/es',
        '/a-propos',
        '/es/a-propos',
        '/mes-pratiques',
        '/es/mes-pratiques',
        '/tarifs',
        '/es/tarifs',
        '/contact',
        '/es/contact',
        '/avis',
        '/es/avis',
      ],
    },
  },
});
