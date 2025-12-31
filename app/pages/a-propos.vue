<script setup lang="ts">
import { useSiteMeta } from "../../composables/useSiteMeta";

const { t } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.about"), t("meta.description"));
</script>

<template>
  <div class="max-w-5xl mx-auto px-4 py-16">
    <h1 class="font-serif text-4xl md:text-5xl text-coffee mb-8 text-center">
      {{ t("about.title") }}
    </h1>

    <div class="max-w-4xl mx-auto space-y-12">
      <!-- Introduction -->
      <section class="text-center">
        <p class="text-xl text-coffee/80 mb-4 font-medium">
          {{ t("about.greeting") }},
        </p>
        <p class="text-lg text-coffee/80 leading-relaxed">
          {{ t("about.intro") }}
        </p>
      </section>

      <!-- Enfance -->
      <section>
        <p class="text-lg text-coffee/80 mb-4 leading-relaxed">
          {{ t("about.childhood") }}
        </p>
        <p class="text-lg text-coffee/80 mb-4 leading-relaxed">
          {{ t("about.natural") }}
        </p>
        <p class="text-lg text-coffee/80 leading-relaxed">
          {{ t("about.never") }}
        </p>
      </section>

      <!-- Parcours professionnel -->
      <section class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div class="order-2 md:order-1">
          <div class="bg-sage-light/30 rounded-2xl aspect-[4/5] flex items-center justify-center">
            <span class="text-coffee/40 text-sm">Photo Erika</span>
          </div>
        </div>
        <div class="order-1 md:order-2">
          <p class="text-lg text-coffee/80 mb-4 leading-relaxed">
            {{ t("about.background") }}
          </p>
          <p class="text-lg text-coffee/80 mb-4 leading-relaxed">
            {{ t("about.human") }}
          </p>
          <p class="text-lg text-coffee/80 mb-4 leading-relaxed">
            {{ t("about.already") }}
          </p>
          <p class="text-lg text-coffee/80 leading-relaxed">
            {{ t("about.heart") }}
          </p>
        </div>
      </section>

      <!-- Quand l'évidence se révèle -->
      <section class="bg-sand-light/50 rounded-2xl p-8 md:p-12">
        <h2 class="font-serif text-3xl md:text-4xl text-coffee mb-8 text-center">
          {{ t("about.revelation.title") }}
        </h2>
        <div class="space-y-6 text-coffee/80 leading-relaxed">
          <p>{{ t("about.revelation.text") }}</p>
          <p>{{ t("about.revelation.realization") }}</p>
          <p>{{ t("about.revelation.decision") }}</p>
          <p>{{ t("about.revelation.training") }}</p>
          <p>{{ t("about.revelation.first") }}</p>
          <p>{{ t("about.revelation.today") }}</p>
          <p>{{ t("about.revelation.therapist") }}</p>
          <p class="text-center text-lg font-medium mt-8">
            {{ t("about.revelation.invitation") }}
          </p>
          <p class="text-center text-lg mt-4">
            {{ t("about.revelation.pleasure") }}
          </p>
        </div>
      </section>

      <!-- Photo cabinet -->
      <section class="text-center">
        <div class="bg-sage-light/30 rounded-2xl aspect-[16/9] flex items-center justify-center max-w-3xl mx-auto">
          <span class="text-coffee/40 text-sm">Photo cabinet</span>
        </div>
      </section>

      <!-- Note complémentaire -->
      <section class="bg-sage-light/30 rounded-2xl p-6 italic text-sm text-coffee/70">
        <p class="font-medium mb-2">{{ t("about.complementary") }}</p>
        <p>{{ t("about.complementaryNote") }}</p>
      </section>
    </div>
  </div>
</template>
