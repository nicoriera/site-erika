<script setup lang="ts">
defineProps<{
  label: string;
  href: string;
}>();
</script>

<template>
  <a :href="href" class="bg-sage-dark text-white px-4 py-2 rounded-full">{{
    label
  }}</a>
</template>
