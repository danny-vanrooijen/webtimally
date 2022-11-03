<template>
  <the-header></the-header>
  <main>
    <page-intro></page-intro>
    <all-services></all-services>
    <contact-us></contact-us>
  </main>
  <the-footer></the-footer>
</template>

<script setup>
import TheHeader from "/src/components/TheHeader.vue";
import TheFooter from "/src/components/TheFooter.vue";

import PageIntro from "/src/components/PageIntro.vue";
import AllServices from "/src/components/AllServices.vue";
import ContactUs from "/src/components/ContactUs.vue";
</script>