<template>
  <div
    class="col-span-12 sm:col-span-6 md:col-span-4"
    :class="{ 'md:-translate-y-24': index % 3 === 1 }"
  >
    <a :href="href">
      <div class="tpl-image aspect-w-1 aspect-h-1">
        <div class="brightness-50">
          <img
            :src="image.src"
            :alt="image.alt"
          />
        </div>
        <div
          class="absolute top-0 left-0 right-0 bottom-0 grid items-center p-12 text-center text-white"
        >
          <div class="flex flex-col items-center">
            <span>{{ description }}</span>
            <circle-cta
              v-if="href"
              class="mt-6"
            />
          </div>
        </div>
      </div>
      <div class="mt-1 md:mt-2.5">{{ title }}</div>
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";
import CircleCta from "@/components/core-components/circle-cta/CircleCta.vue";

const props = defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const title = computed(() => props.project.title);
const description = computed(() => props.project.description);
const href = computed(() => props.project.href);
const image = computed(() => props.project.image);
</script>
