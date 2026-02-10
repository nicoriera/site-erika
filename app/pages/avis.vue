<script setup lang="ts">
const { t } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.reviews"), t("meta.description"));
</script>

<template>
  <div class="min-h-screen">
    <!-- En-tête de page -->
    <header class="bg-sand-light/40 border-b border-sage-light/60">
      <div class="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h1
          class="font-serif text-4xl md:text-5xl text-coffee mb-4 text-center tracking-tight">
          {{ t("reviews.title") }}
        </h1>
        <p class="text-center text-coffee/70 text-lg max-w-2xl mx-auto">
          {{ t("reviews.subtitle") }}
        </p>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-16 md:py-20">
      <div class="max-w-3xl mx-auto">
        <div
          class="bg-sage-light/40 rounded-2xl p-8 md:p-12 text-center border border-sage/10 shadow-lg shadow-coffee/5">
          <p class="text-lg text-coffee/85 mb-8 leading-relaxed">
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
    </main>
  </div>
</template>
