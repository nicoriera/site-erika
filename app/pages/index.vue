<script setup lang="ts">
import HomeHero from "~/components/home/HomeHero.vue";
import HomeAboutTeaser from "~/components/home/HomeAboutTeaser.vue";
import HomeSituations from "~/components/home/HomeSituations.vue";
import HomeVision from "~/components/home/HomeVision.vue";
import HomeCtaRdv from "~/components/home/HomeCtaRdv.vue";
</script>

<template>
  <section class="max-w-5xl mx-auto px-4 py-16">
    <HomeHero />
    <HomeAboutTeaser />
    <HomeSituations />
    <HomeVision />
    <HomeCtaRdv />
  </section>
</template>
