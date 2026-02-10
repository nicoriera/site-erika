<script setup lang="ts">
const { t, tm } = useI18n();

// Fonction helper pour extraire les strings depuis les traductions
const extractTranslationItems = (result: unknown): string[] => {
  if (!Array.isArray(result)) {
    return [];
  }

  return result.map((item: unknown): string => {
    if (typeof item === "string") {
      return item;
    }

    if (typeof item === "object" && item !== null) {
      const obj = item as Record<string, unknown>;
      const body = obj.body as { static?: string } | undefined;
      const loc = obj.loc as { source?: string } | undefined;

      return body?.static || loc?.source || String(item);
    }

    return String(item);
  });
};

const physicalItems = computed((): string[] => {
  const result = tm("home.situations.physical.items") as unknown;
  return extractTranslationItems(result);
});

const emotionalItems = computed((): string[] => {
  const result = tm("home.situations.emotional.items") as unknown;
  return extractTranslationItems(result);
});
</script>

<template>
  <section class="py-16 md:py-20">
    <div class="max-w-5xl mx-auto px-4">
      <h2
        class="font-serif text-3xl md:text-4xl text-coffee mb-12 text-center leading-tight">
        {{ t("home.situations.title") }}
      </h2>

      <div class="grid md:grid-cols-2 gap-10 md:gap-14">
        <!-- Soulagement physique - Gauche -->
        <div
          class="bg-sage-light/30 rounded-2xl p-8 md:p-10 border border-sage/10">
          <h3
            class="font-serif text-2xl md:text-3xl text-coffee mb-6 leading-tight flex items-center gap-3">
            <span
              class="w-8 h-0.5 bg-sage rounded-full shrink-0"
              aria-hidden="true" />
            {{ t("home.situations.physical.title") }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in physicalItems"
              :key="index"
              class="flex items-start gap-3">
              <span
                class="mt-2 w-1.5 h-1.5 rounded-full bg-sage-dark shrink-0"
                aria-hidden="true" />
              <span class="text-coffee/80 leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Équilibre émotionnel - Droite -->
        <div
          class="bg-sand-light/50 rounded-2xl p-8 md:p-10 border border-sand/50">
          <h3
            class="font-serif text-2xl md:text-3xl text-coffee mb-6 leading-tight flex items-center gap-3">
            <span
              class="w-8 h-0.5 bg-terracotta rounded-full shrink-0"
              aria-hidden="true" />
            {{ t("home.situations.emotional.title") }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in emotionalItems"
              :key="index"
              class="flex items-start gap-3">
              <span
                class="mt-2 w-1.5 h-1.5 rounded-full bg-terracotta shrink-0"
                aria-hidden="true" />
              <span class="text-coffee/80 leading-relaxed">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
