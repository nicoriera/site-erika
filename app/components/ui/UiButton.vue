<script setup lang="ts">
interface Props {
  label: string;
  href?: string;
  to?: string;
  variant?: "primary" | "secondary" | "terracotta";
  size?: "sm" | "md" | "lg";
  external?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  external: false,
});

const localePath = useLocalePath();

const baseClasses =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 min-h-[44px]";

const variantClasses = {
  primary: "bg-sage text-white hover:bg-sage-dark focus:ring-sage shadow-sm",
  secondary:
    "bg-sage-light text-coffee hover:bg-sage-light/80 focus:ring-sage border border-sage",
  terracotta:
    "bg-terracotta text-white hover:bg-terracotta/90 focus:ring-terracotta shadow-sm",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm min-h-[36px]",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const classes = computed(() => {
  return [
    baseClasses,
    variantClasses[props.variant],
    sizeClasses[props.size],
  ].join(" ");
});
</script>

<template>
  <NuxtLink
    v-if="to && !external"
    :to="localePath(to)"
    :class="classes">
    {{ label }}
  </NuxtLink>
  <a
    v-else-if="href"
    :href="href"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :class="classes">
    {{ label }}
  </a>
  <button v-else :class="classes">
    {{ label }}
  </button>
</template>
