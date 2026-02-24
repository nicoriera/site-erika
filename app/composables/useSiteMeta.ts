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
  const { locale } = useI18n();

  // URL complète de la page (domaine canonique www)
  const baseUrl =
    (config.public.siteUrl as string) ||
    "https://www.erikamagnetiseusehendaye.fr";
  const currentLocale = locale.value || "fr";
  const path = route.path;
  const canonicalUrl = `${baseUrl}${path}`;

  // Chemins FR et ES pour hreflang (strategy: prefix_except_default)
  const isEs = path.startsWith("/es");
  const frPath = isEs ? (path === "/es" ? "/" : path.slice(3) || "/") : path;
  const esPath = isEs ? path : path === "/" ? "/es" : `/es${path}`;
  const hreflangLinks = [
    { rel: "alternate" as const, hreflang: "fr", href: `${baseUrl}${frPath}` },
    { rel: "alternate" as const, hreflang: "es", href: `${baseUrl}${esPath}` },
    {
      rel: "alternate" as const,
      hreflang: "x-default",
      href: `${baseUrl}${frPath}`,
    },
  ];

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
      ...hreflangLinks,
    ],
    meta: [
      {
        name: "description",
        content: description,
      },
    ],
  });
};
