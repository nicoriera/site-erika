<script setup lang="ts">
import { useI18n, useLocalePath } from "#imports";

interface Props {
  isOpen: boolean;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  close: [];
}>();

const { t } = useI18n();
const localePath = useLocalePath();
const route = useRoute();

// Référence pour le piège de focus
const menuRef = ref<HTMLElement | null>(null);
const closeButtonRef = ref<HTMLButtonElement | null>(null);

const navItems = computed(() => [
  { label: t("nav.home"), path: "/" },
  { label: t("nav.practices"), path: "/mes-pratiques" },
  { label: t("nav.about"), path: "/a-propos" },
  { label: t("nav.rates"), path: "/tarifs" },
  { label: t("nav.contact"), path: "/contact" },
  { label: t("nav.reviews"), path: "/avis" },
]);

const isActive = (path: string): boolean => {
  return route.path === localePath(path);
};

const handleLinkClick = () => {
  emit("close");
};

// Fermer avec Escape
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === "Escape" && props.isOpen) {
      emit("close");
    }
  };
  window.addEventListener("keydown", handleEscape);
  onUnmounted(() => {
    window.removeEventListener("keydown", handleEscape);
  });
});

// Piège de focus : garder le focus dans le menu à l'ouverture
watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      document.body.style.overflow = "hidden";
      nextTick(() => {
        closeButtonRef.value?.focus();
      });
    } else {
      document.body.style.overflow = "";
    }
  },
);
</script>

<template>
  <Teleport to="body">
    <!-- Overlay -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-coffee/40 backdrop-blur-sm z-[100] md:hidden"
        @click="emit('close')"
        aria-hidden="true" />
    </Transition>

    <!-- Menu mobile - panneau coulissant -->
    <Transition name="slide">
      <nav
        v-if="isOpen"
        ref="menuRef"
        id="mobile-menu"
        class="fixed top-0 right-0 bottom-0 w-[min(320px,85vw)] bg-sand-light z-[110] md:hidden overflow-y-auto flex flex-col shadow-2xl ring-1 ring-coffee/10"
        role="navigation"
        :aria-label="t('header.menuTitle')">
        <!-- En-tête du menu : titre + bouton fermer -->
        <div
          class="flex items-center justify-between shrink-0 px-5 py-4 border-b border-sage-light/60 bg-white/50">
          <span class="font-serif text-xl text-coffee tracking-tight">
            {{ t("header.menuTitle") }}
          </span>
          <button
            ref="closeButtonRef"
            type="button"
            @click="emit('close')"
            class="min-h-[44px] min-w-[44px] p-2 rounded-full hover:bg-sage-light/50 transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 flex items-center justify-center"
            :aria-label="t('header.closeMenu')">
            <svg
              class="w-6 h-6 text-coffee"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Navigation - zone tactile 44px minimum -->
        <ul class="flex flex-col py-2 px-3 flex-1 overflow-y-auto">
          <li v-for="item in navItems" :key="item.path">
            <NuxtLink
              :to="localePath(item.path)"
              :class="[
                'flex items-center min-h-[48px] px-5 py-3 rounded-xl text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-inset focus:ring-offset-0',
                isActive(item.path)
                  ? 'bg-sage-light/60 text-sage-dark border-l-4 border-sage-dark -ml-0.5 pl-5'
                  : 'text-coffee hover:bg-sage-light/40 active:bg-sage-light/50',
              ]"
              :aria-current="isActive(item.path) ? 'page' : undefined"
              @click="handleLinkClick">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Sélecteur de langue -->
        <div
          class="shrink-0 px-5 py-4 border-t border-sage-light/60 bg-sand-light/30">
          <p class="text-sm font-medium text-coffee/80 mb-3">
            {{ t("header.language") }}
          </p>
          <div class="flex justify-center">
            <LayoutLanguageToggle />
          </div>
        </div>

        <!-- CTA RDV - bien visible (padding safe-area pour iPhone) -->
        <div
          class="shrink-0 p-5 pt-0 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
          <a
            href="https://www.resalib.fr"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center min-h-[48px] w-full rounded-full bg-sage px-6 py-3 text-white text-base font-semibold shadow-md hover:bg-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 focus:ring-offset-sand-light">
            {{ t("header.bookAppointment") }}
          </a>
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: transform 0.3s cubic-bezier(0.32, 0.72, 0, 1);
}

.slide-leave-active {
  transition: transform 0.25s cubic-bezier(0.32, 0.72, 0, 1);
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
