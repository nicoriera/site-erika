<script setup lang="ts">
const { t, tm } = useI18n();

definePageMeta({});

useSiteMeta(t("pages.reviews"), t("meta.reviewsDescription"));

interface StaticReview {
  author: string;
  rating: number;
  text: string;
  date: string;
}

/** Extrait la chaîne affichable depuis une valeur i18n (string ou objet compilé). */
function extractMessage(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "object" && value !== null) {
    const obj = value as Record<string, unknown>;
    const body = obj.body as { static?: string } | undefined;
    const loc = obj.loc as { source?: string } | undefined;
    return body?.static ?? loc?.source ?? "";
  }
  return String(value ?? "");
}

const reviews = computed<StaticReview[]>(() => {
  const list = tm("reviews.list") as unknown;
  if (!Array.isArray(list)) return [];

  return list.map((item: unknown): StaticReview => {
    const obj = (typeof item === "object" && item !== null ? item : {}) as Record<
      string,
      unknown
    >;
    const ratingRaw = obj.rating;
    const rating =
      typeof ratingRaw === "number"
        ? ratingRaw
        : Number(extractMessage(ratingRaw)) || 5;

    return {
      author: extractMessage(obj.author),
      rating,
      text: extractMessage(obj.text),
      date: extractMessage(obj.date),
    };
  });
});

const placeRating = computed(() => {
  if (reviews.value.length === 0) return null;
  const sum = reviews.value.reduce((acc, r) => acc + r.rating, 0);
  return sum / reviews.value.length;
});

const placeRatingCount = computed(() =>
  reviews.value.length > 0 ? reviews.value.length : null
);

const googleMapsReviewUrl =
  "https://www.google.com/maps/place/?q=Erika+Diaz+de+Cerio+Hendaye";
</script>

<template>
  <div class="min-h-screen bg-sand-light/20">
    <!-- En-tête de page -->
    <header class="bg-sand-light/40 border-b border-sage-light/60">
      <div class="max-w-5xl mx-auto px-4 py-12 md:py-16">
        <h1
          class="font-serif text-4xl md:text-5xl text-coffee mb-4 text-center tracking-tight">
          {{ t("reviews.title") }}
        </h1>
        <p class="text-center text-coffee/70 text-lg max-w-2xl mx-auto leading-relaxed">
          {{ t("reviews.subtitle") }}
        </p>
      </div>
    </header>

    <main class="max-w-5xl mx-auto px-4 py-16 md:py-20">
      <!-- CTA Déposer un avis (en haut) -->
      <section class="mb-16 md:mb-20">
        <div class="rounded-2xl p-8 md:p-10 text-center border-l-4 border-sage bg-sage-light/40 border border-sage/10 shadow-lg shadow-coffee/5">
          <p class="text-lg text-coffee/85 mb-6 leading-relaxed max-w-xl mx-auto">
            {{ t("reviews.description") }}
          </p>
          <a
            :href="googleMapsReviewUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-8 py-4 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors text-lg font-medium shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 shrink-0"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            {{ t("reviews.button") }}
          </a>
        </div>
      </section>

      <!-- Avis -->
      <section
        v-if="reviews.length > 0"
        class="mb-16 md:mb-20 border-b border-sage-light/50 pb-16 md:pb-20">
        <h2
          id="avis-google"
          class="font-serif text-2xl md:text-3xl text-coffee mb-8 scroll-mt-24 leading-tight">
          {{ t("reviews.fromGoogle") }}
        </h2>

        <!-- Note moyenne : pill visible -->
        <div
          v-if="placeRating !== null && placeRatingCount !== null"
          class="inline-flex flex-wrap items-center gap-3 rounded-full border border-sage/20 bg-white px-5 py-3 shadow-sm mb-10"
          aria-label="Note moyenne : {{ placeRating.toFixed(1) }} sur 5">
          <div class="flex gap-0.5" aria-hidden="true">
            <svg
              v-for="star in 5"
              :key="star"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 shrink-0"
              :class="
                star <= Math.round(placeRating)
                  ? 'fill-terracotta text-terracotta'
                  : 'text-sand'
              ">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
            </svg>
          </div>
          <span class="font-serif text-xl text-sage-dark">
            {{ placeRating.toFixed(1) }}
          </span>
          <span class="text-coffee/60 text-sm">
            {{
              placeRatingCount === 1
                ? t("reviews.ratingCountOne")
                : t("reviews.ratingCount", { count: placeRatingCount })
            }}
          </span>
        </div>

        <ul
          class="grid gap-8 sm:grid-cols-1 lg:grid-cols-2"
          role="list">
          <li
            v-for="(review, index) in reviews"
            :key="`review-${index}`"
            class="group bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-coffee/10 ring-1 ring-black/5 border border-sand/30 hover:border-sage/30 transition-colors duration-200">
            <div class="flex flex-wrap items-center gap-2 mb-4">
              <span
                class="font-medium text-coffee"
                :aria-label="`Avis de ${review.author}`">
                {{ review.author }}
              </span>
              <span
                v-if="review.date"
                class="text-sm text-coffee/55 rounded-full bg-sand/40 px-2.5 py-0.5">
                {{ review.date }}
              </span>
            </div>
            <div
              class="flex gap-0.5 mb-4"
              aria-hidden="true">
              <svg
                v-for="star in 5"
                :key="star"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 shrink-0"
                :class="
                  star <= Math.round(review.rating)
                    ? 'fill-terracotta text-terracotta'
                    : 'text-sand'
                ">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
            </div>
            <blockquote class="border-l-4 border-sage pl-5 py-1 text-coffee/85 leading-relaxed italic">
              <p v-if="review.text">
                {{ review.text }}
              </p>
            </blockquote>
          </li>
        </ul>
      </section>

      <!-- CTA Déposer un avis (rappel en bas) -->
      <section class="max-w-3xl mx-auto">
        <p class="text-center text-coffee/70 mb-4">
          {{ t("reviews.description") }}
        </p>
        <div class="text-center">
          <a
            :href="googleMapsReviewUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-sage text-sage-dark hover:bg-sage-light/50 transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 min-h-[44px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5 shrink-0"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
            {{ t("reviews.button") }}
          </a>
        </div>
      </section>
    </main>
  </div>
</template>
