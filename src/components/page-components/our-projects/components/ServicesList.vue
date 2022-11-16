<template>
  <div class="tpl-container tpl-grid gap-5 gap-y-8">
    <div class="tpl-grid col-span-full sm:col-span-2 sm:flex sm:flex-col">
      <h2 class="col-span-6">Our services</h2>
      <a
        href="/services"
        class="col-span-6 grid items-end text-right sm:text-left"
      >
        <span>See all<i class="fa-solid fa-arrow-right ml-2.5"></i> </span>
      </a>
    </div>
    <div class="col-span-full sm:col-span-10 sm:ml-px sm:overflow-hidden">
      <div
        class="grid grid-cols-4 gap-4 gap-y-8 sm:-mr-4 sm:-ml-px sm:gap-x-0 sm:divide-x sm:divide-grey-900/20"
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
    icon: "ICON",
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor",
  },
  {
    icon: "ICON",
    title: "Web Development",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    icon: "ICON",
    title: "SEO & Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor",
  },
  {
    icon: "ICON",
    title: "Brand Creation",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu smod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,",
  },
]);
</script>
