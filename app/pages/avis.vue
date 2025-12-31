<script setup lang="ts">
const { t } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.reviews"), t("meta.description"));
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16">
    <h1 class="font-serif text-4xl md:text-5xl text-coffee mb-4 text-center">
      {{ t("reviews.title") }}
    </h1>
    <p class="text-lg text-coffee/80 mb-8 text-center">
      {{ t("reviews.subtitle") }}
    </p>

    <div class="max-w-3xl mx-auto">
      <div class="bg-sage-light/30 rounded-2xl p-8 md:p-12 text-center">
        <p class="text-lg text-coffee/80 mb-8 leading-relaxed">
          {{ t("reviews.description") }}
        </p>
        <a
          href="https://www.google.com/maps/place/?q=Erika+Diaz+de+Cerio+Hendaye"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-4 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
          {{ t("reviews.button") }}
        </a>
      </div>
    </div>
  </div>
</template>
