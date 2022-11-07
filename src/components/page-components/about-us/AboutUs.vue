<template>
  <section class="bg-black text-white py-20">
    <div class="tpl-container tpl-grid">
      <div class="col-span-12 sm:col-span-7">
        <div class="tpl-image aspect-w-16 aspect-h-9">
          <img src="http://placeimg.com/1920/800/nature" alt="" />
        </div>
      </div>
      <div class="col-span-12 sm:col-span-5 grid gap-12">
        <h2 class="text-white">
          For <mark>10</mark> years now we have been responsible for your
          projects and we are proud of it!
        </h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left"
        >
          <usp-item v-for="usp in usps" :key="usp.value" :usp="usp" />
        </div>
        <button-item bordered href="#">See more</button-item>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import ButtonItem from "@/components/core-components/button-item/ButtonItem.vue";
import UspItem from "./components/UspItem.vue";

const usps = ref([
  {
    label: "30",
    value: "experts",
  },
  {
    label: "15",
    value: "managers",
  },
  {
    label: "200",
    value: "projects",
  },
  {
    label: "24/7",
    value: "support",
  },
]);
</script>