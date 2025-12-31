export const useSiteMeta = (title: string, description: string) => {
  useSeoMeta({
    title,
    description,
  });

  useHead({
    title,
    meta: [
      {
        name: "description",
        content: description,
      },
    ],
  });
};
