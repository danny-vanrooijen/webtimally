<template>
  <div class="tpl-container tpl-grid gap-5 gap-y-8">
    <div class="tpl-grid col-span-full md:col-span-2 md:flex md:flex-col">
      <h2 class="col-span-6">Our services</h2>
      <a
        href="/services"
        class="col-span-6 grid items-end text-right md:text-left"
      >
        <span>See all<i class="fa-solid fa-arrow-right ml-2.5"></i> </span>
      </a>
    </div>
    <div class="col-span-full md:col-span-10 md:ml-px md:overflow-hidden">
      <div
        class="grid grid-cols-4 gap-4 gap-y-8 md:-mr-4 md:-ml-px md:gap-x-0 md:divide-x md:divide-grey-900/20"
      >
        <service-item-small
          v-for="service in services"
          :key="service.title"
          :service="service"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ServiceItemSmall from "./ServiceItemSmall.vue";

const services = ref([
  {
    icon: "fa-light fa-display-code",
    title: "Web development",
    description: "Using the latest technologies to build high quality websites",
  },
  {
    icon: "fa-light fa-gauge-max",
    title: "Web performance",
    description: "We are experts in optimising for Google's Core Web Vitals",
  },
  {
    icon: "fa-brands fa-wordpress-simple",
    title: "Wordpress",
    description: "Development or maintenance of your Wordpress website",
  },
  {
    icon: "fa-light fa-wand-magic-sparkles",
    title: "Prototypes",
    description: "Creating beautiful responsive websites from your design",
  },
]);
</script>
