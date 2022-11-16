<template>
  <section class="tpl-container">
    <!-- <ul class="flex justify-center gap-10">
      <li>All</li>
      <li>Web design</li>
      <li>Web development</li>
      <li>Branding Creation</li>
      <li>SEO &amp; Marketing</li>
    </ul> -->
    <div class="tpl-grid mt-10">
      <service-item
        v-for="(service, index) in services"
        :service="service"
        :key="service.title"
        :index="index"
      />
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import ServiceItem from "./components/ServiceItem.vue";

const services = computed(() => [
  {
    image: {
      src: "http://placeimg.com/1920/800/nature",
      alt: "",
    },
    title: "Web development",
    href: null,
  },
  {
    image: {
      src: "http://placeimg.com/1920/800/nature",
      alt: "",
    },
    title: "Web performance",
    href: null,
  },
  {
    image: {
      src: "http://placeimg.com/1920/800/nature",
      alt: "",
    },
    title: "Web design",
    href: null,
  },
  {
    image: {
      src: "http://placeimg.com/1920/800/nature",
      alt: "",
    },
    title: "Web design",
    href: null,
  },
  {
    image: {
      src: "http://placeimg.com/1920/800/nature",
      alt: "",
    },
    title: "Web design",
    href: null,
  },
  {
    image: {
      src: "http://placeimg.com/1920/800/nature",
      alt: "",
    },
    title: "Web design",
    href: null,
  },
]);
</script>
