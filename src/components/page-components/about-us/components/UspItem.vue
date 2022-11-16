<template>
  <div>
    <span class="block text-3xl"
      ><mark>{{ label }}</mark></span
    >
    <span class="block">{{ value }}</span>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  usp: {
    type: Object,
    required: true,
  },
});

const label = computed(() => props.usp.label);
const value = computed(() => props.usp.value);
</script>