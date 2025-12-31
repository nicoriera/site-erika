<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <section class="py-16 mb-16">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h2 class="font-serif text-4xl md:text-5xl text-coffee mb-8">
        {{ t("home.vision.title") }}
      </h2>
      
      <p class="text-lg text-coffee/80 mb-6 leading-relaxed">
        {{ t("home.vision.intro") }}
      </p>
      
      <p class="text-lg text-coffee/80 mb-12 leading-relaxed">
        {{ t("home.vision.description") }}
      </p>

      <div class="bg-sand-light/50 rounded-2xl p-8 md:p-12 mb-8">
        <p class="text-xl font-medium text-coffee mb-4">
          {{ t("home.vision.subtitle") }}
        </p>
        <p class="text-lg text-coffee/80 mb-6">
          {{ t("home.vision.welcome") }}
        </p>
        
        <p class="text-lg text-coffee/80 mb-6">
          {{ t("home.vision.session") }}
        </p>
        
        <ul class="text-left space-y-3 mb-8 max-w-2xl mx-auto">
          <li class="flex items-start">
            <span class="text-sage-dark mr-3">•</span>
            <span class="text-coffee/80">{{ t("home.vision.goals.blockages") }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-sage-dark mr-3">•</span>
            <span class="text-coffee/80">{{ t("home.vision.goals.circulation") }}</span>
          </li>
          <li class="flex items-start">
            <span class="text-sage-dark mr-3">•</span>
            <span class="text-coffee/80">{{ t("home.vision.goals.harmony") }}</span>
          </li>
        </ul>
        
        <p class="text-lg text-coffee/80 mb-6 leading-relaxed">
          {{ t("home.vision.moment") }}
        </p>
        
        <p class="text-lg text-coffee/80 leading-relaxed">
          {{ t("home.vision.belief") }}
        </p>
      </div>

      <NuxtLink
        :to="localePath('/mes-pratiques')"
        class="inline-flex items-center px-6 py-3 bg-sage text-white rounded-full hover:bg-sage-dark transition-colors">
        {{ t("common.readMore") }}
      </NuxtLink>
    </div>
  </section>
</template>
