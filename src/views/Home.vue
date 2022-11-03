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
import TheHeader from "/src/components/TheHeader.vue";
import TheFooter from "/src/components/TheFooter.vue";

import TheHero from "/src/components/TheHero.vue";
import OurProjects from "/src/components/OurProjects.vue";
import AboutUs from "/src/components/AboutUs.vue";
import OurExperts from "/src/components/OurExperts.vue";
import ContactUs from "/src/components/ContactUs.vue";
import LatestNews from "/src/components/LatestNews.vue";
</script>