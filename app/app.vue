<script setup lang="ts">
import { useStructuredData } from "~/composable/useStructuredData";
// Smooth scroll global
useHead({
  htmlAttrs: {
    style: "scroll-behavior: smooth;",
  },
});

// Structured data pour le SEO
const { addStructuredData } = useStructuredData();
addStructuredData();
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/* Styles d'accessibilité */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.focus\:not-sr-only:focus {
  position: static;
  width: auto;
  height: auto;
  padding: inherit;
  margin: inherit;
  overflow: visible;
  clip: auto;
  white-space: normal;
}

/* Amélioration des focus states pour tous les éléments interactifs */
*:focus-visible {
  outline: 2px solid theme("colors.sage.DEFAULT");
  outline-offset: 2px;
}

/* Transitions globales pour les liens */
a {
  transition: color 0.2s ease, background-color 0.2s ease;
}

/* Touch targets minimum 44x44px sur mobile */
@media (max-width: 768px) {
  button,
  a[role="button"],
  input[type="button"],
  input[type="submit"] {
    min-height: 44px;
    min-width: 44px;
  }
}
</style>
