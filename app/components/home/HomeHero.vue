<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <section class="relative min-h-[60vh] flex items-center justify-center bg-sage-light/30 rounded-2xl mb-16 overflow-hidden">
    <div class="text-center px-4 py-16 z-10">
      <h1 class="font-serif text-5xl md:text-6xl text-coffee mb-4">
        {{ t("home.hero.name") }}
      </h1>
      <p class="text-xl md:text-2xl text-coffee/80 mb-2">
        {{ t("home.hero.title") }}
      </p>
      <p class="text-lg text-coffee/70">
        {{ t("home.hero.location") }}
      </p>
    </div>
  </section>
</template>
