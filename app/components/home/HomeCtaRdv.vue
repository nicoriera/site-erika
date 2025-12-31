<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <section class="py-16 mb-16">
    <div class="max-w-3xl mx-auto px-4">
      <div class="bg-sage-light/40 rounded-2xl p-8 md:p-12 text-center">
        <h2 class="font-serif text-3xl md:text-4xl text-coffee mb-4">
          {{ t("home.cta.title") }}
        </h2>
        
        <p class="text-xl text-coffee/80 mb-8">
          {{ t("home.cta.subtitle") }}
        </p>

        <div class="space-y-4 mb-8 text-left max-w-xl mx-auto">
          <p class="text-lg text-coffee/80">
            {{ t("home.cta.questions.difficult") }}
          </p>
          <p class="text-lg text-coffee/80">
            {{ t("home.cta.questions.emotions") }}
          </p>
          <p class="text-lg text-coffee/80">
            {{ t("home.cta.questions.pause") }}
          </p>
        </div>

        <p class="text-lg text-coffee/80 mb-8 leading-relaxed">
          {{ t("home.cta.accompaniment") }}
        </p>

        <a
          href="https://www.resalib.fr"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center px-8 py-4 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-lg font-medium shadow-lg">
          {{ t("header.bookAppointment") }}
        </a>
      </div>
    </div>
  </section>
</template>
