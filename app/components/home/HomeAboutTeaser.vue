<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <section class="py-16 mb-16">
    <div class="max-w-4xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <!-- Image placeholder - à gauche -->
        <div class="order-2 md:order-1">
          <div class="bg-sage-light/30 rounded-2xl aspect-[4/5] flex items-center justify-center">
            <span class="text-coffee/40 text-sm">Photo Erika</span>
          </div>
        </div>

        <!-- Contenu - à droite -->
        <div class="order-1 md:order-2">
          <h2 class="font-serif text-3xl md:text-4xl text-coffee mb-6">
            {{ t("home.aboutTeaser.title") }}
          </h2>
          
          <p class="text-lg text-coffee/80 mb-4 font-medium">
            {{ t("home.aboutTeaser.greeting") }},
          </p>
          
          <p class="text-lg text-coffee/80 mb-6 leading-relaxed">
            {{ t("home.aboutTeaser.intro") }}
          </p>
          
          <p class="text-lg text-coffee/80 mb-8 leading-relaxed">
            {{ t("home.aboutTeaser.today") }}
          </p>

          <NuxtLink
            :to="localePath('/a-propos')"
            class="inline-flex items-center px-6 py-3 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors">
            {{ t("common.readMore") }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
