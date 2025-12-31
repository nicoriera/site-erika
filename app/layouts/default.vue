<script setup lang="ts">
import { useI18n, useLocalePath } from "#imports";
import LanguageToggle from "~/components/layout/LanguageToggle.vue";

const { t } = useI18n();
const localePath = useLocalePath();
</script>

<template>
  <div class="min-h-screen bg-sand-light text-coffee flex flex-col">
    <!-- HEADER -->
    <header
      class="border-b border-sand bg-sand-light/90 backdrop-blur sticky top-0 z-50">
      <nav
        class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink :to="localePath('/')" class="flex flex-col">
          <span class="font-serif text-xl tracking-wide">
            Erika Diaz de Cerio
          </span>
          <span class="text-xs text-coffee/70">
            {{ t("header.subtitle") }}
          </span>
        </NuxtLink>

        <div class="flex items-center gap-4 md:gap-6">
          <ul class="hidden md:flex items-center gap-6 text-sm">
            <li>
              <NuxtLink :to="localePath('/')" class="hover:text-sage-dark">{{
                t("nav.home")
              }}</NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/mes-pratiques')"
                class="hover:text-sage-dark">
                {{ t("nav.practices") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/a-propos')"
                class="hover:text-sage-dark">
                {{ t("nav.about") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/tarifs')"
                class="hover:text-sage-dark"
                >{{ t("nav.rates") }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                :to="localePath('/contact')"
                class="hover:text-sage-dark">
                {{ t("nav.contact") }}
              </NuxtLink>
            </li>
            <li>
              <a
                href="https://www.resalib.fr"
                target="_blank"
                class="inline-flex items-center rounded-full bg-sage px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-sage-dark transition">
                {{ t("header.bookAppointment") }}
              </a>
            </li>
          </ul>
          <LanguageToggle />
        </div>
      </nav>
    </header>

    <!-- CONTENU -->
    <main class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="mt-16 bg-sage-light/40">
      <div
        class="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <p class="font-medium">{{ t("footer.title") }}</p>
          <p>{{ t("footer.address") }}<br />{{ t("footer.city") }}</p>
          <p class="mt-2">
            {{ t("footer.phone") }}
            <a href="tel:+33750260796" class="underline">07 50 26 07 96</a>
          </p>
          <p>
            {{ t("footer.email") }}
            <a href="mailto:erika.magnetiseuse@gmail.com" class="underline">
              erika.magnetiseuse@gmail.com
            </a>
          </p>
        </div>
        <div>
          <p class="font-medium">{{ t("footer.consultations") }}</p>
          <p>{{ t("footer.consultationsSchedule") }}</p>
          <p class="mt-2">
            {{ t("footer.parking") }}<br />{{ t("footer.bus") }}
          </p>
        </div>
        <div>
          <p class="font-medium">{{ t("footer.payments") }}</p>
          <p>{{ t("footer.paymentsMethods") }}</p>
          <p>{{ t("footer.paymentsRemote") }}</p>
        </div>
      </div>
      <div class="text-center text-xs text-coffee/60 pb-4">
        {{ t("footer.copyright", { year: new Date().getFullYear() }) }}
      </div>
    </footer>
  </div>
</template>
