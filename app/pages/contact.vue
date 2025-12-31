<script setup lang="ts">
import { useSiteMeta } from "../../composables/useSiteMeta";

const { t } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.contact"), t("meta.description"));

const mapContainer = ref<HTMLElement | null>(null);
const shouldLoadMap = ref(false);

onMounted(() => {
  if (!mapContainer.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          shouldLoadMap.value = true;
          observer.disconnect();
        }
      });
    },
    {
      rootMargin: "50px",
    }
  );

  observer.observe(mapContainer.value);

  onUnmounted(() => {
    observer.disconnect();
  });
});

const mapSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.1234567890123!2d-1.7734567890123456!3d43.35678901234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDIxJzI0LjQiTiAxwrA0NicyNC4yIlc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr";
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
            <a
              href="tel:+33750260796"
              class="underline hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded">
              07 50 26 07 96
            </a>
          </div>

          <div>
            <p class="font-medium text-coffee mb-1">
              {{ t("contact.info.email") }}
            </p>
            <a
              href="mailto:erika.magnetiseuse@gmail.com"
              class="underline hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded">
              erika.magnetiseuse@gmail.com
            </a>
            <br />
            <a
              href="mailto:soins.erika@gmail.com"
              class="underline hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded">
              soins.erika@gmail.com
            </a>
          </div>

          <div class="pt-4 border-t border-sand">
            <p class="text-base">{{ t("contact.info.schedule") }}</p>
          </div>
        </div>
      </div>

      <!-- Google Maps -->
      <div class="bg-sand-light/50 rounded-2xl p-8">
        <h2 class="font-serif text-2xl text-coffee mb-6">
          {{ t("contact.map.title") }}
        </h2>
        <div
          ref="mapContainer"
          class="bg-sage-light/30 rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center relative">
          <!-- Placeholder pendant le chargement -->
          <div
            v-if="!shouldLoadMap"
            class="absolute inset-0 flex flex-col items-center justify-center text-coffee/40">
            <svg
              class="w-12 h-12 mb-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p class="text-base">{{ t("contact.map.loading") || "Chargement..." }}</p>
          </div>

          <!-- Iframe chargée uniquement quand visible -->
          <iframe
            v-if="shouldLoadMap"
            :src="mapSrc"
            width="100%"
            height="100%"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            class="w-full h-full"
            title="Carte Google Maps - 13 rue du Siège, 64700 Hendaye">
          </iframe>
        </div>
        <p class="text-base text-coffee/60 mt-4">
          {{ t("footer.parking") }}<br />
          {{ t("footer.bus") }}
        </p>
      </div>
    </div>
  </div>
</template>
