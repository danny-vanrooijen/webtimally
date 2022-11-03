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
import TheHeader from "../../src/components/page-components/the-header/TheHeader.vue";
import TheFooter from "../../src/components/page-components/the-footer/TheFooter.vue";

import TheHero from "../../src/components/page-components/the-hero/TheHero.vue";
import OurProjects from "../../src/components/page-components/our-projects/OurProjects.vue";
import AboutUs from "../../src/components/page-components/about-us/AboutUs.vue";
import OurExperts from "../../src/components/page-components/our-experts/OurExperts.vue";
import ContactUs from "../../src/components/page-components/contact-us/ContactUs.vue";
import LatestNews from "../../src/components/page-components/latest-news/LatestNews.vue";
</script>