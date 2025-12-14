<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <h2 class="text-2xl font-serif text-coffee mb-8">{{ title }}</h2>
</template>
