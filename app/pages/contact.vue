<script setup lang="ts">
import { useSiteMeta } from "../../composables/useSiteMeta";

const { t } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.contact"), t("meta.description"));
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16">
    <h1 class="font-serif text-4xl text-coffee mb-4">
      {{ t("contact.title") }}
    </h1>
    <p class="text-lg text-coffee/80 mb-12">{{ t("contact.subtitle") }}</p>

    <div class="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
      <!-- Informations de contact -->
      <div class="bg-sage-light/30 rounded-2xl p-8">
        <h2 class="font-serif text-2xl text-coffee mb-6">
          {{ t("contact.info.title") }}
        </h2>

        <div class="space-y-4 text-coffee/80">
          <div>
            <p class="font-medium text-coffee mb-1">
              {{ t("contact.info.address") }}
            </p>
            <p>{{ t("contact.info.city") }}</p>
          </div>

          <div>
            <p class="font-medium text-coffee mb-1">
              {{ t("contact.info.phone") }}
            </p>
            <a href="tel:+33750260796" class="underline hover:text-sage-dark">
              07 50 26 07 96
            </a>
          </div>

          <div>
            <p class="font-medium text-coffee mb-1">
              {{ t("contact.info.email") }}
            </p>
            <a
              href="mailto:erika.magnetiseuse@gmail.com"
              class="underline hover:text-sage-dark">
              erika.magnetiseuse@gmail.com
            </a>
            <br />
            <a
              href="mailto:soins.erika@gmail.com"
              class="underline hover:text-sage-dark">
              soins.erika@gmail.com
            </a>
          </div>

          <div class="pt-4 border-t border-sand">
            <p class="text-sm">{{ t("contact.info.schedule") }}</p>
          </div>
        </div>
      </div>

      <!-- Google Maps -->
      <div class="bg-sand-light/50 rounded-2xl p-8">
        <h2 class="font-serif text-2xl text-coffee mb-6">
          {{ t("contact.map.title") }}
        </h2>
        <div
          class="bg-sage-light/30 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1234567890123!2d-1.7734567890123456!3d43.35678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDIxJzI0LjQiTiAxwrA0NicyNC4yIlc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full">
          </iframe>
        </div>
        <p class="text-sm text-coffee/60 mt-4">
          {{ t("footer.parking") }}<br />
          {{ t("footer.bus") }}
        </p>
      </div>
    </div>
  </div>
</template>
