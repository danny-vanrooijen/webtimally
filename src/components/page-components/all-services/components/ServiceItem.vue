<template>
  <div :class="serviceItemWidth">
    <a
      class="tpl-image relative block h-full w-full"
      :class="serviceItemHeight"
      :href="href"
    >
      <img
        :src="image.src"
        :alt="image.alt"
      />
      <div class="top-0 left-0 right-0 bottom-0">
        <div class="tpl-image-label">
          {{ title }}
          <div class="tpl-button tpl-button--circle tpl-button--circle-small">
            <i class="fa-regular fa-arrow-right"></i>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  service: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const serviceItemWidth = computed(() => {
  if (props.index % 6 === 0) {
    return "col-span-7 row-span-2";
  }
  if (props.index % 6 === 1 || props.index % 6 === 2 || props.index % 6 === 3) {
    return "col-span-5";
  }
  if (props.index % 6 === 4) {
    return "col-span-7";
  }
  if (props.index % 6 === 5) {
    return "col-span-12";
  }
});

const serviceItemHeight = computed(() => {
  if (props.index % 6 === 1 || props.index % 6 === 4) {
    return "aspect-w-16 aspect-h-9";
  }
  if (props.index % 6 === 5) {
    return "aspect-w-16 aspect-h-4";
  } else {
    return "h-full w-full";
  }
});

const image = computed(() => props.service.image);
const title = computed(() => props.service.title);
const href = computed(() => props.service.href);
</script>
