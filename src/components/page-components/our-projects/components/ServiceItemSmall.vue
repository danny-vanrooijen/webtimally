<template>
  <div class="col-span-2 md:col-span-1 md:px-4">
    <div class="mb-5">
      <i
        class="bg-gradient-to-br from-pink to-purple bg-clip-text text-4xl text-transparent"
        :class="icon"
      />
    </div>
    <h3>{{ title }}</h3>
    <p class="line-clamp-2 md:line-clamp-3">
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
