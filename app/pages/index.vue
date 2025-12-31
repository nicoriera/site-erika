<script setup lang="ts">
import { useSiteMeta } from "../../composables/useSiteMeta";

const { t } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.home"), t("meta.description"));
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
