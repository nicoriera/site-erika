<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <section class="py-8 md:py-10 lg:py-12">
    <div class="max-w-5xl mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8 md:gap-14 items-center">
        <!-- Image - à gauche -->
        <div class="order-2 md:order-1 max-w-[280px] md:max-w-[320px] mx-auto md:mx-0">
          <div
            class="rounded-2xl overflow-hidden shadow-lg shadow-coffee/10 ring-1 ring-black/5 aspect-[4/5]">
            <img
              src="/images/photo-erika.png"
              :alt="t('home.aboutTeaser.imageAlt')"
              class="w-full h-full object-cover" />
          </div>
        </div>

        <!-- Contenu - à droite -->
        <div class="order-1 md:order-2">
          <h2
            class="font-serif text-3xl md:text-4xl text-coffee mb-6 leading-tight">
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
