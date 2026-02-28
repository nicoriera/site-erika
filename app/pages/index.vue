<script setup lang="ts">
const { t } = useI18n();

definePageMeta({});

useSiteMeta(t("meta.homeTitle"), t("meta.description"));
</script>

<template>
  <div class="max-w-5xl mx-auto px-4">
    <HomeHero />
    <HomeVision />
    <HomeSituations />
    <HomeAboutTeaser />
    <HomeCtaRdv />
  </div>
</template>
