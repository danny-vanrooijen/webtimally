<template>
  <div class="col-span-2 sm:col-span-1 sm:px-4">
    <div class="mb-5">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <p class="line-clamp-2 sm:line-clamp-3">
      {{ description }}
    </p>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
});

const icon = computed(() => props.service.icon);
const title = computed(() => props.service.title);
const description = computed(() => props.service.description);
</script>