<template>
  <div class="tpl-container tpl-grid gap-5 gap-y-8">
    <div class="col-span-full sm:col-span-2 tpl-grid sm:flex sm:flex-col">
      <h2 class="col-span-6">Our services</h2>
      <a
        href="/services"
        class="col-span-6 text-right sm:text-left grid items-end"
      >
        <span>See all<i class="fa-solid fa-arrow-right ml-2.5"></i> </span>
      </a>
    </div>
    <div class="col-span-full sm:col-span-10 sm:overflow-hidden sm:ml-px">
      <div
        class="
          grid grid-cols-4
          gap-4 gap-y-8
          sm:gap-x-0 sm:divide-x sm:divide-grey-900/20 sm:-mr-4 sm:-ml-px
        "
      >
        <service-item
          v-for="(service, index) in services"
          :key="index"
          :service="service"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ServiceItem from "./ServiceItem.vue";

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