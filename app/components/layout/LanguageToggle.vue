<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();

const switchLanguage = (targetLocale: string) => {
  setLocale(targetLocale as "fr" | "es");
};

const isActive = (localeCode: string) => {
  return locale.value === localeCode;
};

const getLocaleCode = (localeItem: any): string => {
  if (typeof localeItem === "string") return localeItem;
  return localeItem.code || "";
};

const getLocaleLabel = (localeItem: any): string => {
  const code = getLocaleCode(localeItem);
  return code.toUpperCase();
};

const getLocaleName = (localeItem: any): string => {
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
      :class="[
        'relative px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ease-in-out min-w-[2.5rem] flex items-center justify-center',
        isActive(getLocaleCode(localeItem))
          ? 'bg-sage text-white shadow-sm scale-105'
          : 'text-coffee/70 hover:text-coffee hover:bg-sand',
      ]"
      :aria-label="`Changer la langue vers ${getLocaleName(localeItem)}`"
      :aria-pressed="isActive(getLocaleCode(localeItem))">
      <span class="relative z-10">{{ getLocaleLabel(localeItem) }}</span>
    </button>
  </div>
</template>
