<script setup lang="ts">
import { useI18n, useLocalePath } from "#imports";
import LanguageToggle from "~/components/layout/LanguageToggle.vue";
import MobileMenu from "~/components/layout/MobileMenu.vue";
import ScrollToTop from "~/components/ui/ScrollToTop.vue";

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

// Fermer le menu quand on change de route
watch(
  () => route.path,
  () => {
    isMobileMenuOpen.value = false;
  }
);

// Vérifier si une route est active
const isActiveRoute = (path: string): boolean => {
  return route.path === localePath(path);
};
</script>

<template>
  <div class="min-h-screen bg-sand-light text-coffee flex flex-col">
    <!-- Skip link pour l'accessibilité -->
    <a
      href="#main-content"
      class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-sage focus:text-white focus:rounded-full focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2">
      Aller au contenu principal
    </a>

    <!-- HEADER -->
    <header
      class="border-b border-sand bg-sand-light/90 backdrop-blur sticky top-0 z-50">
      <nav
        class="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <NuxtLink :to="localePath('/')" class="flex flex-col">
          <span class="font-serif text-lg tracking-wide">
            Erika Diaz de Cerio
          </span>
          <span class="text-xs text-coffee/70">
            {{ t("header.subtitle") }}
          </span>
        </NuxtLink>

        <div class="flex items-center gap-4 md:gap-6">
          <!-- Menu desktop -->
          <ul class="hidden md:flex items-center gap-6 text-sm">
            <li>
              <NuxtLink
                :to="localePath('/')"
                :class="[
                  'hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded',
                  isActiveRoute('/')
                    ? 'text-sage-dark font-medium'
                    : 'text-coffee',
                ]"
                :aria-current="isActiveRoute('/') ? 'page' : undefined">
                {{ t("nav.home") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/mes-pratiques')"
                :class="[
                  'hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded',
                  isActiveRoute('/mes-pratiques')
                    ? 'text-sage-dark font-medium'
                    : 'text-coffee',
                ]"
                :aria-current="
                  isActiveRoute('/mes-pratiques') ? 'page' : undefined
                ">
                {{ t("nav.practices") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/a-propos')"
                :class="[
                  'hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded',
                  isActiveRoute('/a-propos')
                    ? 'text-sage-dark font-medium'
                    : 'text-coffee',
                ]"
                :aria-current="isActiveRoute('/a-propos') ? 'page' : undefined">
                {{ t("nav.about") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/tarifs')"
                :class="[
                  'hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded',
                  isActiveRoute('/tarifs')
                    ? 'text-sage-dark font-medium'
                    : 'text-coffee',
                ]"
                :aria-current="isActiveRoute('/tarifs') ? 'page' : undefined">
                {{ t("nav.rates") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/contact')"
                :class="[
                  'hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded',
                  isActiveRoute('/contact')
                    ? 'text-sage-dark font-medium'
                    : 'text-coffee',
                ]"
                :aria-current="isActiveRoute('/contact') ? 'page' : undefined">
                {{ t("nav.contact") }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                :to="localePath('/avis')"
                :class="[
                  'hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded',
                  isActiveRoute('/avis')
                    ? 'text-sage-dark font-medium'
                    : 'text-coffee',
                ]"
                :aria-current="isActiveRoute('/avis') ? 'page' : undefined">
                {{ t("nav.reviews") }}
              </NuxtLink>
            </li>
            <li>
              <a
                href="https://www.resalib.fr"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center rounded-full bg-sage px-4 py-2 text-white text-sm font-medium shadow-sm hover:bg-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2">
                {{ t("header.bookAppointment") }}
              </a>
            </li>
          </ul>

          <!-- Bouton hamburger mobile -->
          <button
            @click="toggleMobileMenu"
            class="md:hidden p-2 rounded-full hover:bg-sand transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
            :aria-expanded="isMobileMenuOpen"
            aria-label="Ouvrir le menu de navigation"
            aria-controls="mobile-menu">
            <svg
              v-if="!isMobileMenuOpen"
              class="w-6 h-6 text-coffee"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              v-else
              class="w-6 h-6 text-coffee"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <LanguageToggle />
        </div>

        <!-- Menu mobile -->
        <MobileMenu :is-open="isMobileMenuOpen" @close="closeMobileMenu" />
      </nav>
    </header>

    <!-- CONTENU -->
    <main id="main-content" class="flex-1">
      <slot />
    </main>

    <!-- FOOTER -->
    <footer class="mt-16 bg-sage-light/40">
      <div
        class="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-base">
        <div>
          <p class="font-medium">{{ t("footer.title") }}</p>
          <p>{{ t("footer.address") }}<br />{{ t("footer.city") }}</p>
          <p class="mt-2">
            {{ t("footer.phone") }}
            <a
              href="tel:+33750260796"
              class="underline hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded">
              07 50 26 07 96
            </a>
          </p>
          <p>
            {{ t("footer.email") }}
            <a
              href="mailto:erika.magnetiseuse@gmail.com"
              class="underline hover:text-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded">
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
      <div class="text-center text-sm text-coffee/60 pb-4">
        {{ t("footer.copyright", { year: new Date().getFullYear() }) }}
      </div>
    </footer>

    <!-- Bouton retour en haut -->
    <ScrollToTop />
  </div>
</template>
