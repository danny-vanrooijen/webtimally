<template>
  <the-header></the-header>
  <main>
    <page-intro></page-intro>
    <about-us></about-us>
    <our-services></our-services>
    <how-we-work></how-we-work>
    <our-experts></our-experts>
  </main>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from "/src/components/TheHeader.vue";
import TheFooter from "/src/components/TheFooter.vue";

import PageIntro from "/src/components/PageIntro.vue";
import AboutUs from "/src/components/AboutUs.vue";
import OurServices from "/src/components/OurServices.vue";
import HowWeWork from "/src/components/HowWeWork.vue";
import OurExperts from "/src/components/OurExperts.vue";
</script>