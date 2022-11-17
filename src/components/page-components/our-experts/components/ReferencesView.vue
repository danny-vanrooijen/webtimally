<template>
  <div class="tpl-container tpl-grid">
    <div class="tpl-grid col-span-full md:col-span-3 md:flex md:flex-col">
      <h2 class="col-span-9">Here's what they say about our work</h2>
    </div>
    <div class="col-span-full md:col-span-9">
      <div
        class="relative flex w-full snap-x snap-mandatory gap-x-5 overflow-x-auto md:gap-x-9 md:overflow-x-hidden"
      >
        <reference-item
          v-for="(reference, index) in references"
          :key="reference.author"
          :reference="reference"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import referenceItem from "./ReferenceItem.vue";

const references = ref([
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    author: "Lion James",
    title: "Director SBI Agency",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Sonya Polyakova",
    title: "TBN Studio",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
    author: "Lion James",
    title: "Director SBI Agency",
  },
]);
</script>
