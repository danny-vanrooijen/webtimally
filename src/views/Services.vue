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
import TheHeader from "../../src/components/page-components/the-header/TheHeader.vue";
import TheFooter from "../../src/components/page-components/the-footer/TheFooter.vue";

import PageIntro from "../../src/components/page-components/page-intro/PageIntro.vue";
import AllServices from "../../src/components/page-components/all-services/AllServices.vue";
import ContactUs from "../../src/components/page-components/contact-us/ContactUs.vue";
</script>