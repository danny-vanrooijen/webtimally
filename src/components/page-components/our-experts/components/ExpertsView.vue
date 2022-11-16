<template>
  <div class="tpl-container tpl-grid">
    <div class="col-span-6 sm:col-span-3"><h2>Our experts</h2></div>
  </div>
  <div class="tpl-container tpl-grid mt-10">
    <expert-item
      v-for="expert in experts"
      :key="expert.name"
      :expert="expert"
    />
  </div>
</template>

<script setup>
import ExpertItem from "./ExpertItem.vue";

const experts = [
  {
    href: "#",
    image: {
      src: "http://placeimg.com/1920/800/tech",
      alt: "Gretta Martin",
    },
    name: "Gretta Martin",
    occupation: "Designer",
  },
  {
    href: "#",
    image: {
      src: "http://placeimg.com/1920/800/nature",
      alt: "Mexim Vernik",
    },
    name: "Mexim Vernik",
    occupation: "Development",
  },
  {
    href: "#",
    image: {
      src: "http://placeimg.com/1920/800/people",
      alt: "Lily Smith",
    },
    name: "Lily Smith",
    occupation: "Branding",
  },
  {
    href: "#",
    image: {
      src: "http://placeimg.com/1920/800/arch",
      alt: "Drew Colson",
    },
    name: "Drew Colson",
    occupation: "Marketing",
  },
];
</script>