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

const navItems = [
  { label: t("nav.home"), path: "/" },
  { label: t("nav.practices"), path: "/mes-pratiques" },
  { label: t("nav.about"), path: "/a-propos" },
  { label: t("nav.rates"), path: "/tarifs" },
  { label: t("nav.contact"), path: "/contact" },
  { label: t("nav.reviews"), path: "/avis" },
];

const isActive = (path: string): boolean => {
  return route.path === localePath(path);
};

const handleLinkClick = () => {
  emit("close");
};

// Fermer le menu avec la touche Escape
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

// Empêcher le scroll du body quand le menu est ouvert
watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
);
</script>

<template>
  <Teleport to="body">
    <!-- Overlay -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-coffee/50 backdrop-blur-sm z-40 md:hidden"
        @click="emit('close')"
        aria-hidden="true"
      />
    </Transition>

    <!-- Menu mobile -->
    <Transition name="slide">
      <nav
        v-if="isOpen"
        class="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-sand-light z-50 shadow-2xl md:hidden overflow-y-auto"
        role="navigation"
        aria-label="Menu de navigation principal">
        <div class="flex flex-col h-full">
          <!-- Header du menu -->
          <div class="flex items-center justify-between p-4 border-b border-sand">
            <span class="font-serif text-lg text-coffee">
              {{ t("nav.home") }}
            </span>
            <button
              @click="emit('close')"
              class="p-2 rounded-full hover:bg-sand transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
              aria-label="Fermer le menu">
              <svg
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
          </div>

          <!-- Navigation -->
          <ul class="flex flex-col py-4">
            <li v-for="item in navItems" :key="item.path">
              <NuxtLink
                :to="localePath(item.path)"
                :class="[
                  'block px-6 py-4 text-coffee transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-inset',
                  isActive(item.path)
                    ? 'bg-sage-light/50 text-sage-dark font-medium border-l-4 border-sage-dark'
                    : 'hover:bg-sage-light/30',
                ]"
                :aria-current="isActive(item.path) ? 'page' : undefined"
                @click="handleLinkClick">
                {{ item.label }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Bouton RDV -->
          <div class="px-6 py-4 border-t border-sand mt-auto">
            <a
              href="https://www.resalib.fr"
              target="_blank"
              rel="noopener noreferrer"
              class="block w-full text-center rounded-full bg-sage px-6 py-3 text-white text-base font-medium shadow-sm hover:bg-sage-dark transition-colors focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2">
              {{ t("header.bookAppointment") }}
            </a>
          </div>
        </div>
      </nav>
    </Transition>
  </Teleport>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: transform 0.3s ease-out;
}

.slide-leave-active {
  transition: transform 0.3s ease-in;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>

