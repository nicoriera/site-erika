// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
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
});
