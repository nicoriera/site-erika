<script setup lang="ts">
const { t, tm } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.practices"), t("meta.description"));

// Helper pour les chemins d'images (espaces encodés)
const img = (name: string) => encodeURI(`/images/${name}`);

// Photos par section
const photoMagnetisme = img("photo 3.png");
const photoApresSeance = img("photo 10.png");
const photoCouperLeFeu = img("photo 11.png");
const photoSoinsDistance = img("photo 12.png");

// Carousel "Déroulé de la séance" — Option 1 : photos 5, 8, 6 (portrait/paysage mixte)
const carouselSessionImages = [
  img("photo 5.png"),
  img("photo 8.png"),
  img("photo 6.png"),
] as const;

const carouselIndex = ref(0);

const goToSlide = (index: number) => {
  carouselIndex.value =
    (index + carouselSessionImages.length) % carouselSessionImages.length;
};

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
  <div class="min-h-screen">
    <!-- En-tête de page : titre + navigation rapide -->
    <header class="bg-sand-light/40 border-b border-sage-light/60">
      <div class="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h1
          class="font-serif text-4xl md:text-5xl text-coffee mb-4 text-center tracking-tight">
          {{ t("practices.title") }}
        </h1>
        <p class="text-center text-coffee/70 text-lg max-w-2xl mx-auto mb-10">
          {{ t("practices.pageIntro") }}
        </p>
        <nav
          class="flex flex-wrap justify-center gap-3"
          aria-label="Navigation rapide vers les sections">
          <NuxtLink
            to="#magnetisme"
            class="px-5 py-2.5 bg-white text-coffee rounded-full border border-sage/20 shadow-sm hover:bg-sage-light/40 hover:border-sage/30 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px] flex items-center">
            {{ t("practices.magnetism.title") }}
          </NuxtLink>
          <NuxtLink
            to="#couper-le-feu"
            class="px-5 py-2.5 bg-white text-coffee rounded-full border border-sage/20 shadow-sm hover:bg-sage-light/40 hover:border-sage/30 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px] flex items-center">
            {{ t("practices.cutFire.title") }}
          </NuxtLink>
          <NuxtLink
            to="#soins-distance"
            class="px-5 py-2.5 bg-white text-coffee rounded-full border border-sage/20 shadow-sm hover:bg-sage-light/40 hover:border-sage/30 transition-all duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px] flex items-center">
            {{ t("practices.remote.title") }}
          </NuxtLink>
        </nav>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-4">
      <!-- Section Magnétisme -->
      <section
        id="magnetisme"
        class="scroll-mt-24 py-16 md:py-20 border-b border-sand/40">
        <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-start mb-14">
          <div class="order-2 md:order-1">
            <div
              class="rounded-2xl overflow-hidden shadow-lg shadow-coffee/10 ring-1 ring-black/5">
              <img
                :src="photoMagnetisme"
                :alt="t('practices.magnetism.imageAlt')"
                class="w-full aspect-[2/3] object-cover" />
            </div>
          </div>
          <div class="order-1 md:order-2">
            <h2
              class="font-serif text-3xl md:text-4xl text-coffee mb-6 leading-tight">
              {{ t("practices.magnetism.title") }}
            </h2>
            <p class="text-lg text-coffee/90 mb-5 leading-relaxed">
              {{ t("practices.magnetism.subtitle") }}
            </p>
            <blockquote
              class="border-l-4 border-sage pl-5 py-1 my-6 text-coffee/80 italic text-lg">
              {{ t("practices.magnetism.metaphor") }}
            </blockquote>
            <p class="text-lg text-coffee/80 mb-5 leading-relaxed">
              {{ t("practices.magnetism.intro") }}
            </p>
            <p class="text-lg text-coffee/80 leading-relaxed">
              {{ t("practices.magnetism.description") }}
            </p>
          </div>
        </div>

        <div class="max-w-3xl mx-auto space-y-10">
          <div class="space-y-4">
            <p class="text-lg text-coffee/80 leading-relaxed">
              {{ t("practices.magnetism.role") }}
            </p>
            <p class="text-lg text-coffee/80 leading-relaxed">
              {{ t("practices.magnetism.process") }}
            </p>
          </div>

          <div
            class="bg-sand-light/60 rounded-2xl p-8 md:p-10 border border-sand/50">
            <h3 class="font-serif text-xl text-coffee mb-4">
              {{ t("practices.magnetism.benefits") }}
            </h3>
            <ul class="space-y-3">
              <li
                v-for="(benefit, index) in benefitsList"
                :key="index"
                class="flex items-start gap-3">
                <span
                  class="mt-2 w-1.5 h-1.5 rounded-full bg-sage-dark shrink-0"
                  aria-hidden="true" />
                <span class="text-coffee/85 leading-relaxed">{{ benefit }}</span>
              </li>
            </ul>
          </div>

          <aside
            class="bg-sage-light/40 rounded-2xl p-6 md:p-8 border-l-4 border-sage text-coffee/80">
            <p class="font-medium text-coffee mb-2">
              {{ t("practices.magnetism.complementary") }}
            </p>
            <p class="text-sm leading-relaxed italic">
              {{ t("practices.magnetism.complementaryNote") }}
            </p>
          </aside>

          <!-- Déroulé d'une séance (carousel) -->
          <div class="pt-8">
            <h3
              class="font-serif text-2xl md:text-3xl text-coffee mb-8 flex items-center gap-3">
              <span
                class="w-8 h-0.5 bg-sage rounded-full"
                aria-hidden="true" />
              {{ t("practices.magnetism.session.title") }}
            </h3>
            <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div class="order-2 md:order-1">
                <div
                  class="relative rounded-2xl overflow-hidden bg-sand-light/50 shadow-lg shadow-coffee/10 ring-1 ring-black/5">
                  <div class="aspect-[2/3] relative">
                    <img
                      v-for="(src, index) in carouselSessionImages"
                      :key="src"
                      :src="src"
                      :alt="
                        t('practices.magnetism.session.carouselAlt', {
                          n: index + 1,
                        })
                      "
                      :class="[
                        'absolute inset-0 w-full h-full object-cover transition-opacity duration-300',
                        index === carouselIndex
                          ? 'opacity-100 z-10'
                          : 'opacity-0 z-0',
                      ]" />
                  </div>
                  <div
                    class="absolute bottom-4 left-0 right-0 z-20 flex items-center justify-between px-4">
                    <button
                      type="button"
                      :aria-label="t('common.prev')"
                      class="p-2.5 rounded-full bg-white/90 text-coffee hover:bg-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
                      @click="goToSlide(carouselIndex - 1)">
                      <span class="sr-only">{{ t("common.prev") }}</span>
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div class="flex gap-2">
                      <button
                        v-for="(_, index) in carouselSessionImages"
                        :key="index"
                        type="button"
                        :aria-label="
                          t('practices.magnetism.session.goToSlide', {
                            n: index + 1,
                          })
                        "
                        :class="[
                          'w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-1',
                          index === carouselIndex
                            ? 'bg-sage-dark'
                            : 'bg-white/80',
                        ]"
                        @click="carouselIndex = index" />
                    </div>
                    <button
                      type="button"
                      :aria-label="t('common.next')"
                      class="p-2.5 rounded-full bg-white/90 text-coffee hover:bg-white shadow-md transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
                      @click="goToSlide(carouselIndex + 1)">
                      <span class="sr-only">{{ t("common.next") }}</span>
                      <svg
                        class="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div
                class="order-1 md:order-2 space-y-5 text-coffee/85 text-lg leading-relaxed">
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
          <div class="pt-12">
            <h3
              class="font-serif text-2xl md:text-3xl text-coffee mb-8 flex items-center gap-3">
              <span
                class="w-8 h-0.5 bg-sage rounded-full"
                aria-hidden="true" />
              {{ t("practices.magnetism.after.title") }}
            </h3>
            <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
              <div class="order-1 md:order-2">
                <div
                  class="rounded-2xl overflow-hidden shadow-lg shadow-coffee/10 ring-1 ring-black/5">
                  <img
                    :src="photoApresSeance"
                    :alt="t('practices.magnetism.after.imageAlt')"
                    class="w-full aspect-[2/3] object-cover" />
                </div>
              </div>
              <div
                class="order-2 md:order-1 space-y-5 text-coffee/85 text-lg leading-relaxed">
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

      <!-- Section Couper le feu -->
      <section
        id="couper-le-feu"
        class="scroll-mt-24 py-16 md:py-20 bg-sage-light/20 border-b border-sage-light/50">
        <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div class="order-1 md:order-2">
            <div
              class="rounded-2xl overflow-hidden shadow-lg shadow-coffee/10 ring-1 ring-black/5">
              <img
                :src="photoCouperLeFeu"
                :alt="t('practices.cutFire.imageAlt')"
                class="w-full aspect-[2/3] object-cover" />
            </div>
          </div>
          <div class="order-2 md:order-1">
            <h2
              class="font-serif text-3xl md:text-4xl text-coffee mb-6 leading-tight">
              {{ t("practices.cutFire.title") }}
            </h2>
            <div class="space-y-5 text-coffee/85 text-lg leading-relaxed">
              <p>{{ t("practices.cutFire.intro") }}</p>
              <p>{{ t("practices.cutFire.uses") }}</p>
              <p>{{ t("practices.cutFire.goal") }}</p>
              <p>{{ t("practices.cutFire.location") }}</p>
              <p>{{ t("practices.cutFire.urgency") }}</p>
              <p>{{ t("practices.cutFire.sessions") }}</p>
              <div
                class="bg-white/70 rounded-2xl p-6 mt-8 border border-sage/20">
                <p class="font-semibold text-coffee mb-2">
                  {{ t("practices.cutFire.important") }}
                </p>
                <p class="text-coffee/80 text-base leading-relaxed">
                  {{ t("practices.cutFire.note") }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Section Soins à distance -->
      <section
        id="soins-distance"
        class="scroll-mt-24 py-16 md:py-20 border-b border-sand/40">
        <div class="grid md:grid-cols-2 gap-10 md:gap-14 items-start">
          <div class="order-2 md:order-1">
            <div
              class="rounded-2xl overflow-hidden shadow-lg shadow-coffee/10 ring-1 ring-black/5">
              <img
                :src="photoSoinsDistance"
                :alt="t('practices.remote.imageAlt')"
                class="w-full aspect-[2/3] object-cover" />
            </div>
          </div>
          <div class="order-1 md:order-2">
            <h2
              class="font-serif text-3xl md:text-4xl text-coffee mb-6 leading-tight">
              {{ t("practices.remote.title") }}
            </h2>
            <div class="space-y-5 text-coffee/85 text-lg leading-relaxed">
              <p>{{ t("practices.remote.intro") }}</p>
              <p>{{ t("practices.remote.process") }}</p>
              <p>{{ t("practices.remote.feelings") }}</p>
              <p class="font-medium text-coffee">
                {{ t("practices.remote.efficiency") }}
              </p>
              <p>{{ t("practices.remote.before") }}</p>
              <p>{{ t("practices.remote.photos") }}</p>
              <p>{{ t("practices.remote.after") }}</p>
              <p>{{ t("practices.remote.useful") }}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>
