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
import TheHeader from "@/components/page-components/the-header/TheHeader.vue";
import TheFooter from "@/components/page-components/the-footer/TheFooter.vue";

import PageIntro from "@/components/page-components/page-intro/PageIntro.vue";
import AllServices from "@/components/page-components/all-services/AllServices.vue";
import ContactUs from "@/components/page-components/contact-us/ContactUs.vue";
</script>