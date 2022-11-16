<template>
  <div class="tpl-container tpl-grid">
    <div class="col-span-full sm:col-span-3 tpl-grid sm:flex sm:flex-col">
      <h2 class="col-span-9">Here's what they say about our work</h2>
    </div>
    <div class="col-span-full sm:col-span-9">
      <div
        class="
          relative
          w-full
          flex
          gap-x-5
          sm:gap-x-9
          snap-x snap-mandatory
          overflow-x-auto
          sm:overflow-x-hidden
        "
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