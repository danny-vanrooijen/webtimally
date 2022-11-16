<template>
  <div
    class="w-[90%] snap-start flex-none"
    :class="[index === 0 ? 'sm:w-[45%]' : 'sm:w-1/2']"
  >
    <p>
      {{ referenceText }}
    </p>
    <div class="mt-5 w-2/3 relative">
      <div class="font-bold">{{ author }}</div>
      <div>{{ title }}</div>
      <div
        class="tpl-quote-icon absolute bottom-0 right-0 translate-x-full"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  reference: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    default: 0,
  },
});

const referenceText = computed(() => props.reference.text);
const author = computed(() => props.reference.author);
const title = computed(() => props.reference.title);
</script>