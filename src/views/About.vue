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
import TheHeader from "../../src/components/page-components/the-header/TheHeader.vue";
import TheFooter from "../../src/components/page-components/the-footer/TheFooter.vue";

import PageIntro from "../../src/components/page-components/page-intro/PageIntro.vue";
import AboutUs from "../../src/components/page-components/about-us/AboutUs.vue";
import OurServices from "../../src/components/page-components/our-services/OurServices.vue";
import HowWeWork from "../../src/components/page-components/how-we-work/HowWeWork.vue";
import OurExperts from "../../src/components/page-components/our-experts/OurExperts.vue";
</script>