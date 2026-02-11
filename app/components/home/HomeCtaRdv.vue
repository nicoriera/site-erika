<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="py-8 md:py-10 lg:py-12">
    <div class="max-w-3xl mx-auto px-4">
      <div
        class="bg-sage-light/40 rounded-2xl p-8 md:p-12 text-center border border-sage/10 shadow-lg shadow-coffee/5">
        <h2
          class="font-serif text-3xl md:text-4xl text-coffee mb-6 leading-tight">
          {{ t("home.cta.title") }}
        </h2>

        <p class="text-xl text-coffee/80 mb-8">
          {{ t("home.cta.subtitle") }}
        </p>

        <p class="text-lg text-coffee/80 mb-8 leading-relaxed max-w-xl mx-auto whitespace-pre-line">
          {{ t("home.cta.questions") }}
        </p>

        <p class="text-lg text-coffee/80 mb-8 leading-relaxed">
          {{ t("home.cta.accompaniment") }}
        </p>

        <a
          href="https://www.resalib.fr"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-4 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-lg font-medium shadow-lg focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
          {{ t("header.bookAppointment") }}
        </a>
      </div>
    </div>
  </section>
</template>
