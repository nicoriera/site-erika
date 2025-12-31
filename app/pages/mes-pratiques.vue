<script setup lang="ts">
import { useSiteMeta } from "../../composables/useSiteMeta";

const { t, tm } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.practices"), t("meta.description"));

// Récupération de la liste des bienfaits depuis les traductions
const benefitsList = computed((): string[] => {
  const result = tm("practices.magnetism.benefitsList") as unknown;

  if (!Array.isArray(result)) {
    return [];
  }

  return result.map((item: unknown): string => {
    if (typeof item === "string") {
      return item;
    }

    // Gestion des objets de traduction Nuxt i18n
    if (typeof item === "object" && item !== null) {
      const obj = item as Record<string, unknown>;
      const body = obj.body as { static?: string } | undefined;
      const loc = obj.loc as { source?: string } | undefined;

      return body?.static || loc?.source || String(item);
    }

    return String(item);
  });
});
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16">
    <h1 class="font-serif text-4xl md:text-5xl text-coffee mb-8 text-center">
      {{ t("practices.title") }}
    </h1>

    <!-- Navigation rapide -->
    <nav class="mb-12 flex flex-wrap justify-center gap-4">
      <NuxtLink
        to="#magnetisme"
        class="px-4 py-2 bg-sage-light/30 text-coffee rounded-full hover:bg-sage-light/50 transition-colors text-sm">
        {{ t("practices.magnetism.title") }}
      </NuxtLink>
      <NuxtLink
        to="#couper-le-feu"
        class="px-4 py-2 bg-sage-light/30 text-coffee rounded-full hover:bg-sage-light/50 transition-colors text-sm">
        {{ t("practices.cutFire.title") }}
      </NuxtLink>
      <NuxtLink
        to="#soins-distance"
        class="px-4 py-2 bg-sage-light/30 text-coffee rounded-full hover:bg-sage-light/50 transition-colors text-sm">
        {{ t("practices.remote.title") }}
      </NuxtLink>
    </nav>

    <!-- Magnétisme et soins énergétiques -->
    <section id="magnetisme" class="mb-20">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
        <div class="order-2 md:order-1">
          <div
            class="bg-sage-light/30 rounded-2xl aspect-[4/3] flex items-center justify-center">
            <span class="text-coffee/40 text-sm">Photo soin énergétique</span>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <h2 class="font-serif text-3xl md:text-4xl text-coffee mb-6">
            {{ t("practices.magnetism.title") }}
          </h2>
          <p class="text-lg text-coffee/80 mb-6 italic">
            {{ t("practices.magnetism.metaphor") }}
          </p>
          <p class="text-lg text-coffee/80 mb-6 leading-relaxed">
            {{ t("practices.magnetism.intro") }}
          </p>
          <p class="text-lg text-coffee/80 mb-6 leading-relaxed">
            {{ t("practices.magnetism.description") }}
          </p>
        </div>
      </div>

      <div class="max-w-3xl mx-auto space-y-8">
        <div>
          <p class="text-lg text-coffee/80 mb-4 leading-relaxed">
            {{ t("practices.magnetism.role") }}
          </p>
          <p class="text-lg text-coffee/80 leading-relaxed">
            {{ t("practices.magnetism.process") }}
          </p>
        </div>

        <div class="bg-sand-light/50 rounded-2xl p-8">
          <p class="text-lg text-coffee/80 mb-4 font-medium">
            {{ t("practices.magnetism.benefits") }}
          </p>
          <ul class="space-y-2">
            <li
              v-for="(benefit, index) in benefitsList"
              :key="index"
              class="flex items-start">
              <span class="text-sage-dark mr-3 mt-1">•</span>
              <span class="text-coffee/80">{{ benefit }}</span>
            </li>
          </ul>
        </div>

        <div
          class="bg-sage-light/30 rounded-2xl p-6 italic text-sm text-coffee/70">
          <p class="font-medium mb-2">
            {{ t("practices.magnetism.complementary") }}
          </p>
          <p>{{ t("practices.magnetism.complementaryNote") }}</p>
        </div>

        <!-- Déroulé d'une séance -->
        <div class="mt-12">
          <h3 class="font-serif text-2xl text-coffee mb-6">
            {{ t("practices.magnetism.session.title") }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-8">
            <div class="order-2 md:order-1">
              <div
                class="bg-sand-light/50 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <span class="text-coffee/40 text-sm">Photo séance</span>
              </div>
            </div>
            <div
              class="order-1 md:order-2 space-y-4 text-coffee/80 leading-relaxed">
              <p>{{ t("practices.magnetism.session.beginning") }}</p>
              <p>{{ t("practices.magnetism.session.adaptation") }}</p>
              <p>{{ t("practices.magnetism.session.during") }}</p>
              <p>{{ t("practices.magnetism.session.process") }}</p>
              <p>{{ t("practices.magnetism.session.intervention") }}</p>
              <p>{{ t("practices.magnetism.session.sensations") }}</p>
              <p>{{ t("practices.magnetism.session.end") }}</p>
            </div>
          </div>
        </div>

        <!-- L'après séance -->
        <div class="mt-12">
          <h3 class="font-serif text-2xl text-coffee mb-6">
            {{ t("practices.magnetism.after.title") }}
          </h3>
          <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div class="order-1 md:order-2">
              <div
                class="bg-sage-light/30 rounded-2xl aspect-[4/3] flex items-center justify-center">
                <span class="text-coffee/40 text-sm">Photo après séance</span>
              </div>
            </div>
            <div
              class="order-2 md:order-1 space-y-4 text-coffee/80 leading-relaxed">
              <p>{{ t("practices.magnetism.after.water") }}</p>
              <p>{{ t("practices.magnetism.after.benefits") }}</p>
              <p>{{ t("practices.magnetism.after.feelings") }}</p>
              <p>{{ t("practices.magnetism.after.days") }}</p>
              <p>{{ t("practices.magnetism.after.sensitivity") }}</p>
              <p>{{ t("practices.magnetism.after.oldPain") }}</p>
              <p>{{ t("practices.magnetism.after.positive") }}</p>
              <p>{{ t("practices.magnetism.after.frequency") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Couper le feu -->
    <section id="couper-le-feu" class="mb-20">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div class="order-1 md:order-2">
          <div
            class="bg-sand-light/50 rounded-2xl aspect-[4/3] flex items-center justify-center">
            <span class="text-coffee/40 text-sm">Photo couper le feu</span>
          </div>
        </div>
        <div class="order-2 md:order-1">
          <h2 class="font-serif text-3xl md:text-4xl text-coffee mb-6">
            {{ t("practices.cutFire.title") }}
          </h2>
          <div class="space-y-4 text-coffee/80 leading-relaxed">
            <p>{{ t("practices.cutFire.intro") }}</p>
            <p>{{ t("practices.cutFire.uses") }}</p>
            <p>{{ t("practices.cutFire.goal") }}</p>
            <p>{{ t("practices.cutFire.location") }}</p>
            <p>{{ t("practices.cutFire.urgency") }}</p>
            <p>{{ t("practices.cutFire.sessions") }}</p>
            <div class="bg-sage-light/30 rounded-xl p-4 mt-6">
              <p class="font-medium text-coffee mb-2">
                {{ t("practices.cutFire.important") }}
              </p>
              <p class="text-sm">{{ t("practices.cutFire.note") }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Soins à distance -->
    <section id="soins-distance" class="mb-20">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
        <div class="order-2 md:order-1">
          <div
            class="bg-sage-light/30 rounded-2xl aspect-[4/3] flex items-center justify-center">
            <span class="text-coffee/40 text-sm">Photo soins à distance</span>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <h2 class="font-serif text-3xl md:text-4xl text-coffee mb-6">
            {{ t("practices.remote.title") }}
          </h2>
          <div class="space-y-4 text-coffee/80 leading-relaxed">
            <p>{{ t("practices.remote.intro") }}</p>
            <p>{{ t("practices.remote.process") }}</p>
            <p>{{ t("practices.remote.feelings") }}</p>
            <p class="font-medium">{{ t("practices.remote.efficiency") }}</p>
            <p>{{ t("practices.remote.before") }}</p>
            <p>{{ t("practices.remote.photos") }}</p>
            <p>{{ t("practices.remote.after") }}</p>
            <p>{{ t("practices.remote.useful") }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
