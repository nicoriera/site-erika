<script setup lang="ts">
import { useI18n, useSwitchLocalePath, useLocalePath } from "#imports";

interface LocaleItem {
  code: string;
  name?: string;
}

const { locale, locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();

const switchLanguage = (targetLocale: string) => {
  const targetLocaleCode = targetLocale as "fr" | "es";

  // Ne rien faire si on clique sur la langue déjà active
  if (locale.value === targetLocaleCode) {
    return;
  }

  // Obtenir le chemin dans la nouvelle locale
  const newPath = switchLocalePath(targetLocaleCode);

  if (!newPath) {
    return;
  }

  // Naviguer vers la nouvelle URL avec le bon préfixe
  navigateTo(newPath);
};

const isActive = (localeCode: string): boolean => {
  return locale.value === localeCode;
};

const getLocaleCode = (localeItem: string | LocaleItem): string => {
  if (typeof localeItem === "string") return localeItem;
  return localeItem.code || "";
};

const getLocaleLabel = (localeItem: string | LocaleItem): string => {
  const code = getLocaleCode(localeItem);
  return code.toUpperCase();
};

const getLocaleName = (localeItem: string | LocaleItem): string => {
  if (typeof localeItem === "string") return localeItem;
  return localeItem.name || localeItem.code || "";
};
</script>

<template>
  <div
    class="inline-flex items-center gap-1 p-1 bg-sand-light rounded-full border border-sand"
    role="group"
    aria-label="Sélecteur de langue">
    <button
      v-for="localeItem in locales"
      :key="getLocaleCode(localeItem)"
      @click="switchLanguage(getLocaleCode(localeItem))"
      :disabled="isActive(getLocaleCode(localeItem))"
      :class="[
        'relative px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-200 ease-in-out min-w-[2.5rem] min-h-[24px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2',
        isActive(getLocaleCode(localeItem))
          ? 'bg-sage text-white shadow-sm scale-105 cursor-default'
          : 'text-coffee/70 hover:text-coffee hover:bg-sand cursor-pointer',
      ]"
      :aria-label="`Changer la langue vers ${getLocaleName(localeItem)}`"
      :aria-pressed="isActive(getLocaleCode(localeItem))">
      <span class="relative z-10">{{ getLocaleLabel(localeItem) }}</span>
    </button>
  </div>
</template>
