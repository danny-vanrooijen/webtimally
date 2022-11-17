<template>
  <a
    :href="href"
    class="col-span-12 bg-black text-white md:col-span-3"
  >
    <div class="tpl-image aspect-w-1 aspect-h-1">
      <div>
        <img
          :src="image.src"
          :alt="image.alt"
        />
      </div>
    </div>
    <div class="p-3 text-center">
      <h3 class="text-xl text-white">{{ name }}</h3>
      <div>{{ occupation }}</div>
    </div>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  expert: {
    type: Object,
    required: true,
  },
});

const href = computed(() => props.expert.href);
const image = computed(() => props.expert.image);
const name = computed(() => props.expert.name);
const occupation = computed(() => props.expert.occupation);
</script>
