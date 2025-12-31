interface SiteMetaOptions {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

export const useSiteMeta = (
  title: string,
  description: string,
  options?: Partial<SiteMetaOptions>
) => {
  const config = useRuntimeConfig();
  const route = useRoute();
  const { $i18n } = useNuxtApp();

  // URL complète de la page
  const baseUrl =
    (config.public.siteUrl as string) || "https://erika-diaz-de-cerio.fr";
  const currentLocale = $i18n.locale.value || "fr";
  const path = route.path;
  const canonicalUrl = `${baseUrl}${path}`;

  // Image par défaut (à créer plus tard)
  const defaultImage = `${baseUrl}/images/og-image.jpg`;
  const image = options?.image || defaultImage;

  // Type de contenu
  const type = (options?.type || "website") as "website" | "article";

  // Titre complet avec site name
  const fullTitle = `${title} | Erika Diaz de Cerio`;

  useSeoMeta({
    title: fullTitle,
    description,
    ogTitle: title,
    ogDescription: description,
    ogImage: image,
    ogType: type,
    ogUrl: canonicalUrl,
    ogSiteName: "Erika Diaz de Cerio - Magnétiseuse",
    ogLocale: currentLocale === "fr" ? "fr_FR" : "es_ES",
    twitterCard: "summary_large_image",
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  });

  useHead({
    title: fullTitle,
    link: [
      {
        rel: "canonical",
        href: canonicalUrl,
      },
    ],
    meta: [
      {
        name: "description",
        content: description,
      },
    ],
  });
};
