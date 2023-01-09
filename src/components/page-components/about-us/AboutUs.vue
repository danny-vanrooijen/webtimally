<template>
  <section
    name="about-us"
    class="bg-black py-20 text-white"
  >
    <div class="tpl-container tpl-grid">
      <div class="col-span-12 md:col-span-7">
        <div class="tpl-image aspect-w-16 aspect-h-9">
          <img
            src="/src/assets/images/developer-working-on-macbook.jpg"
            width="736"
            height="414"
            alt=""
          />
        </div>
      </div>
      <div class="col-span-12 grid place-items-center gap-12 md:col-span-5">
        <h2 class="text-white">
          Building beautiful websites with <mark>dedication</mark> and
          <mark>passion</mark> for over 15 years
        </h2>
        <!-- <div
          class="grid grid-cols-2 gap-8 text-center sm:grid-cols-4 md:text-left"
        >
          <usp-item
            v-for="usp in usps"
            :key="usp.value"
            :usp="usp"
          />
        </div> -->
        <!-- <button-item
          bordered
          href="#"
        >
          See more
        </button-item> -->
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
