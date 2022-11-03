<template>
  <the-header></the-header>
  <main>
    <the-hero></the-hero>
    <our-projects></our-projects>
    <about-us></about-us>
    <our-experts></our-experts>
    <contact-us></contact-us>
    <latest-news></latest-news>
  </main>
  <the-footer></the-footer>
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