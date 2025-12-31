export const useSiteMeta = (title?: string, description?: string) => {
  const { t } = useI18n();

  useSeoMeta({
    title: title || t("meta.title"),
    description: description || t("meta.description"),
  });
};
