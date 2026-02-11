<script setup lang="ts">
const { t } = useI18n();

definePageMeta({});

const photoAbout = encodeURI("/images/photo 13.png");

useSiteMeta(t("pages.about"), t("meta.description"));
</script>

<template>
  <div class="min-h-screen">
    <!-- En-tête de page -->
    <header class="bg-sand-light/40 border-b border-sage-light/60">
      <div class="max-w-5xl mx-auto px-4 py-8 md:py-10">
        <h1
          class="font-serif text-4xl md:text-5xl text-coffee mb-4 text-center tracking-tight">
          {{ t("about.title") }}
        </h1>
        <p class="text-center text-coffee/70 text-lg max-w-2xl mx-auto">
          {{ t("about.pageIntro") }}
        </p>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-4">
      <div class="max-w-3xl mx-auto">
        <!-- Introduction -->
        <section class="py-10 md:py-10 lg:py-12 border-b border-sand/40 text-center">
          <p class="text-xl text-coffee/85 mb-4 font-medium">
            {{ t("about.greeting") }},
          </p>
          <p class="text-lg text-coffee/80 leading-relaxed">
            {{ t("about.intro") }}
          </p>
        </section>

        <!-- Enfance -->
        <section
          class="py-10 md:py-10 lg:py-12 bg-sage-light/20 border-b border-sage-light/50">
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
        <section class="py-10 md:py-10 lg:py-12 border-b border-sand/40">
          <div class="grid md:grid-cols-2 gap-8 md:gap-14 items-start">
            <div class="order-2 md:order-1 max-w-[240px] md:max-w-[280px] mx-auto md:mx-0">
              <div
                class="rounded-2xl overflow-hidden shadow-lg shadow-coffee/10 ring-1 ring-black/5 aspect-[2/3]">
                <img
                  :src="photoAbout"
                  :alt="t('about.profileImageAlt')"
                  class="w-full h-full object-cover" />
              </div>
            </div>
            <div class="order-1 md:order-2 space-y-5">
              <p class="text-lg text-coffee/80 leading-relaxed">
                {{ t("about.background") }}
              </p>
              <p class="text-lg text-coffee/80 leading-relaxed">
                {{ t("about.human") }}
              </p>
              <p class="text-lg text-coffee/80 leading-relaxed">
                {{ t("about.already") }}
              </p>
              <p
                v-if="t('about.heart')"
                class="text-lg text-coffee/80 leading-relaxed">
                {{ t("about.heart") }}
              </p>
            </div>
          </div>
        </section>

        <!-- Quand l'évidence se révèle -->
        <section
          class="py-10 md:py-10 lg:py-12 bg-sand-light/50 border-b border-sand/40">
          <h2
            class="font-serif text-3xl md:text-4xl text-coffee mb-8 text-center leading-tight">
            {{ t("about.revelation.title") }}
          </h2>
          <div class="space-y-6 text-coffee/85 text-lg leading-relaxed">
            <p>{{ t("about.revelation.text") }}</p>
            <p>{{ t("about.revelation.realization") }}</p>
            <p>{{ t("about.revelation.decision") }}</p>
            <p>{{ t("about.revelation.training") }}</p>
            <p>{{ t("about.revelation.first") }}</p>
            <p>{{ t("about.revelation.today") }}</p>
            <p>{{ t("about.revelation.therapist") }}</p>
            <p class="text-center text-lg font-medium mt-8 text-coffee">
              {{ t("about.revelation.invitation") }}
            </p>
            <p class="text-center text-lg mt-4 text-coffee/80">
              {{ t("about.revelation.pleasure") }}
            </p>
          </div>
        </section>

        <!-- Photo cabinet -->
        <section class="py-10 md:py-10 lg:py-12 border-b border-sand/40">
          <div
            class="rounded-2xl overflow-hidden shadow-lg shadow-coffee/10 ring-1 ring-black/5 aspect-[16/9] max-w-[280px] md:max-w-2xl mx-auto">
            <img
              src="/images/photo 14.JPG"
              :alt="t('about.cabinetImageAlt')"
              class="w-full h-full object-cover" />
          </div>
        </section>

        <!-- Note complémentaire -->
        <section class="py-10 md:py-10 lg:py-12">
          <aside
            class="bg-sage-light/40 rounded-2xl p-6 md:p-8 border-l-4 border-sage text-coffee/80">
            <p class="font-medium text-coffee mb-2">
              {{ t("about.complementary") }}
            </p>
            <p class="text-sm leading-relaxed">
              {{ t("about.complementaryNote") }}
            </p>
          </aside>
        </section>
      </div>
    </main>
  </div>
</template>
