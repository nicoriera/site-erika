interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  description?: string;
  address: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
  url?: string;
  priceRange?: string;
  openingHours?: string;
  image?: string;
}

interface PersonSchema {
  "@context": string;
  "@type": string;
  name: string;
  jobTitle?: string;
  description?: string;
  email?: string;
  telephone?: string;
  address?: {
    "@type": string;
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  image?: string;
}

interface ServiceSchema {
  "@context": string;
  "@type": string;
  serviceType: string;
  provider: {
    "@type": string;
    name: string;
  };
  areaServed: {
    "@type": string;
    name: string;
  };
  description?: string;
}

export const useStructuredData = () => {
  const route = useRoute();
  const { $i18n } = useNuxtApp();
  const { t } = useI18n();

  const config = useRuntimeConfig();
  const baseUrl =
    (config.public.siteUrl as string) || "https://erika-diaz-de-cerio.fr";
  const currentLocale = $i18n.locale.value || "fr";

  // Schema LocalBusiness
  const localBusinessSchema = computed<LocalBusinessSchema>(() => ({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Erika Diaz de Cerio",
    description: t("meta.description"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "13 rue du Siège",
      addressLocality: "Hendaye",
      postalCode: "64700",
      addressCountry: "FR",
    },
    telephone: "+33750260796",
    email: "erika.magnetiseuse@gmail.com",
    url: baseUrl,
    priceRange: "€€",
    openingHours: "Mo-Sa",
    image: `${baseUrl}/images/og-image.jpg`,
  }));

  // Schema Person
  const personSchema = computed<PersonSchema>(() => ({
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Erika Diaz de Cerio",
    jobTitle: t("header.subtitle"),
    description: t("meta.description"),
    email: "erika.magnetiseuse@gmail.com",
    telephone: "+33750260796",
    address: {
      "@type": "PostalAddress",
      streetAddress: "13 rue du Siège",
      addressLocality: "Hendaye",
      postalCode: "64700",
      addressCountry: "FR",
    },
    image: `${baseUrl}/images/og-image.jpg`,
  }));

  // Schema Service pour les pratiques
  const serviceSchemas = computed<ServiceSchema[]>(() => [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: t("practices.magnetism.title"),
      provider: {
        "@type": "Person",
        name: "Erika Diaz de Cerio",
      },
      areaServed: {
        "@type": "City",
        name: "Hendaye",
      },
      description: t("practices.magnetism.description"),
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: t("practices.cutFire.title"),
      provider: {
        "@type": "Person",
        name: "Erika Diaz de Cerio",
      },
      areaServed: {
        "@type": "City",
        name: "Hendaye",
      },
      description: t("practices.cutFire.intro"),
    },
  ]);

  // Ajouter les schemas à la page
  const addStructuredData = () => {
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify(localBusinessSchema.value),
        },
        {
          type: "application/ld+json",
          children: JSON.stringify(personSchema.value),
        },
        ...serviceSchemas.value.map((schema) => ({
          type: "application/ld+json",
          children: JSON.stringify(schema),
        })),
      ],
    });
  };

  return {
    localBusinessSchema,
    personSchema,
    serviceSchemas,
    addStructuredData,
  };
};
