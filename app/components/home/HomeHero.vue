<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section
    class="relative min-h-[45vh] flex items-center justify-center rounded-2xl mb-8 md:mb-10 overflow-hidden">
    <!-- Image de fond -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/beach-rocks-sunset.png"
        :alt="t('home.hero.imageAlt')"
        class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-coffee/30"></div>
    </div>

    <!-- Contenu -->
    <div class="text-center px-4 py-16 z-10 relative flex flex-col gap-4">
      <h1
        class="font-serif text-white drop-shadow-lg flex flex-col items-center gap-1">
        <span class="text-4xl md:text-5xl">{{ t("home.hero.h1Name") }}</span>
        <span class="text-white/70 text-2xl font-sans font-light">—</span>
        <span class="text-3xl md:text-4xl">{{ t("home.hero.h1Tag") }}</span>
      </h1>

      <p class="text-xl md:text-2xl text-white/90 drop-shadow-md">
        {{ t("home.hero.title") }}
      </p>
    </div>
  </section>
</template>
