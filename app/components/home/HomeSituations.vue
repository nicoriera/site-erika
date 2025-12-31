<script setup lang="ts">
const { t } = useI18n();

const physicalItems = computed(() => 
  t("home.situations.physical.items", {}, { returnObjects: true }) as string[]
);
const emotionalItems = computed(() => 
  t("home.situations.emotional.items", {}, { returnObjects: true }) as string[]
);
</script>

<template>
  <section class="py-16 mb-16">
    <div class="max-w-5xl mx-auto px-4">
      <h2 class="font-serif text-4xl md:text-5xl text-coffee mb-12 text-center">
        {{ t("home.situations.title") }}
      </h2>

      <div class="grid md:grid-cols-2 gap-8 md:gap-12">
        <!-- Soulagement physique - Gauche -->
        <div class="bg-sage-light/30 rounded-2xl p-8">
          <h3 class="font-serif text-2xl text-coffee mb-6">
            {{ t("home.situations.physical.title") }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in physicalItems"
              :key="index"
              class="flex items-start">
              <span class="text-sage-dark mr-3 mt-1">•</span>
              <span class="text-coffee/80">{{ item }}</span>
            </li>
          </ul>
        </div>

        <!-- Équilibre émotionnel - Droite -->
        <div class="bg-sand-light/50 rounded-2xl p-8">
          <h3 class="font-serif text-2xl text-coffee mb-6">
            {{ t("home.situations.emotional.title") }}
          </h3>
          <ul class="space-y-3">
            <li
              v-for="(item, index) in emotionalItems"
              :key="index"
              class="flex items-start">
              <span class="text-terracotta mr-3 mt-1">•</span>
              <span class="text-coffee/80">{{ item }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
