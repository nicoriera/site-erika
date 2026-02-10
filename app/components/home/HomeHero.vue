<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section
    class="relative min-h-[45vh] flex items-center justify-center rounded-2xl mb-16 overflow-hidden">
    <!-- Image de fond -->
    <div class="absolute inset-0 z-0">
      <img
        src="/images/beach-rocks-sunset.png"
        :alt="t('home.hero.imageAlt')"
        class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-coffee/30"></div>
    </div>

    <!-- Contenu -->
    <div class="text-center px-4 py-16 z-10 relative">
      <h1
        class="font-serif text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
        {{ t("home.hero.name") }}
      </h1>
      <p class="text-xl md:text-2xl text-white/95 mb-2 drop-shadow-md">
        {{ t("home.hero.title") }}
      </p>
      <p class="text-lg text-white/90 drop-shadow-md">
        {{ t("home.hero.location") }}
      </p>
    </div>
  </section>
</template>
