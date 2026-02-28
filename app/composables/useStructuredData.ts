export const useStructuredData = () => {
  const { t } = useI18n();
  const config = useRuntimeConfig();
  const baseUrl =
    (config.public.siteUrl as string) ||
    "https://www.erikamagnetiseusehendaye.fr";

  // LocalBusiness avec AggregateRating intégré
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": `${baseUrl}/#business`,
    name: "Erika Diaz de Cerio",
    description: t("meta.description"),
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 boulevard du Général de Gaulle",
      addressLocality: "Hendaye",
      postalCode: "64700",
      addressCountry: "FR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 43.3576,
      longitude: -1.7697,
    },
    telephone: "+33750260796",
    email: "soins.erikaddc@gmail.com",
    url: baseUrl,
    priceRange: "€€",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "19:00",
      },
    ],
    image: `${baseUrl}/images/og-image.jpg`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "5",
      bestRating: "5",
      worstRating: "1",
    },
  };

  // Person
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#person`,
    name: "Erika Diaz de Cerio",
    jobTitle: t("header.subtitle"),
    description: t("meta.description"),
    email: "soins.erikaddc@gmail.com",
    telephone: "+33750260796",
    address: {
      "@type": "PostalAddress",
      streetAddress: "14 boulevard du Général de Gaulle",
      addressLocality: "Hendaye",
      postalCode: "64700",
      addressCountry: "FR",
    },
    worksFor: {
      "@id": `${baseUrl}/#business`,
    },
    image: `${baseUrl}/images/og-image.jpg`,
  };

  // Services
  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: t("practices.magnetism.title"),
      serviceType: t("practices.magnetism.title"),
      provider: {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Erika Diaz de Cerio",
      },
      areaServed: {
        "@type": "City",
        name: "Hendaye",
      },
      description: t("practices.magnetism.description"),
      url: `${baseUrl}/mes-pratiques#magnetisme`,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: t("practices.cutFire.title"),
      serviceType: t("practices.cutFire.title"),
      provider: {
        "@type": "Person",
        "@id": `${baseUrl}/#person`,
        name: "Erika Diaz de Cerio",
      },
      areaServed: {
        "@type": "City",
        name: "Hendaye",
      },
      description: t("practices.cutFire.intro"),
      url: `${baseUrl}/mes-pratiques#couper-le-feu`,
    },
  ];

  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(localBusinessSchema),
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify(personSchema),
      },
      ...serviceSchemas.map((schema) => ({
        type: "application/ld+json",
        innerHTML: JSON.stringify(schema),
      })),
    ],
  });
};
