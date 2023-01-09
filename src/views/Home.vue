<template>
  <the-header />
  <main>
    <the-hero />
    <our-projects />
    <about-us />
    <!-- <our-experts /> -->
    <!-- <contact-us /> -->
    <!-- <latest-news /> -->
  </main>
  <the-footer />
</template>

<script setup>
import TheHeader from "@/components/page-components/the-header/TheHeader.vue";
import TheFooter from "@/components/page-components/the-footer/TheFooter.vue";

import TheHero from "@/components/page-components/the-hero/TheHero.vue";
import OurProjects from "@/components/page-components/our-projects/OurProjects.vue";
import AboutUs from "@/components/page-components/about-us/AboutUs.vue";
import OurExperts from "@/components/page-components/our-experts/OurExperts.vue";
import ContactUs from "@/components/page-components/contact-us/ContactUs.vue";
import LatestNews from "@/components/page-components/latest-news/LatestNews.vue";
</script>
