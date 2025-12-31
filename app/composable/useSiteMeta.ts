import { useI18n } from "#imports";

export const useSiteMeta = () => {
  const { t } = useI18n();

  return {
    title: t("meta.title"),
    description: t("meta.description"),
  };
};
