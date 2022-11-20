<template>
  <section class="tpl-container mt-4 md:mt-8 md:mb-24">
    <div
      class="tpl-container tpl-grid items-center border-t-2 border-b-2 border-grey-100 py-10"
    >
      <div class="col-span-9 md:col-span-5 md:col-start-2">
        <h1 v-html="title"></h1>
      </div>
      <div class="col-span-12 text-2xl md:col-span-4 md:col-start-8">
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
