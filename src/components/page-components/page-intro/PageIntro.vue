<template>
  <section class="tpl-container mt-4 sm:mt-8 sm:mb-24">
    <div
      class="tpl-container tpl-grid items-center border-t-2 border-b-2 border-grey-100 py-10"
    >
      <div class="col-span-9 sm:col-span-5 sm:col-start-2">
        <h1 v-html="title"></h1>
      </div>
      <div class="col-span-12 text-2xl sm:col-span-4 sm:col-start-8">
        <p>{{ description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  texts: {
    type: Object,
    default: {
      title: "A little <mark>Default</mark> descriptive text",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    },
  },
});

const title = computed(() => props.texts.title);
const description = computed(() => props.texts.description);
</script>
