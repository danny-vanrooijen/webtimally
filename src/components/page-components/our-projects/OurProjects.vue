<template>
  <section>
    <projects-list />
    <component-separator />
    <services-list />
  </section>
</template>

<script setup>
import ProjectsList from "./components/ProjectsList.vue";
import ComponentSeparator from "@/components/core-components/component-separator/ComponentSeparator.vue";
import ServicesList from "./components/ServicesList.vue";
</script>
