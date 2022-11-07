<template>
  <section>
    <div class="tpl-container tpl-grid mb-8">
      <h2 class="col-span-6 sm:col-span-4">Our work</h2>
      <a
        class="
          col-span-6
          sm:col-span-4 sm:col-start-9
          text-right
          grid
          items-end
        "
      >
        <span
          >See all our work<i class="fa-solid fa-arrow-right ml-2.5"></i>
        </span>
      </a>
    </div>
    <div class="tpl-container tpl-grid">
      <template v-for="(project, index) in projects" :key="project.title">
        <project-item :project="project" :index="index" />
      </template>
    </div>
    <component-separator />
    <services-list />
  </section>
</template>

<script setup>
import { ref } from "vue";
import ProjectItem from "./components/ProjectItem.vue";
import ComponentSeparator from "@/components/core-components/component-separator/ComponentSeparator.vue";
import ServicesList from "./components/ServicesList.vue";
import CircleCta from "@/components/core-components/circle-cta/CircleCta.vue";

const projects = ref([
  {
    title: "Online store",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lobortis aliquet mi, vulputate tincidunt nunc dapibus vitae.",
    href: "",
    image: {
      src: "",
      alt: "",
    },
  },
  {
    title: "Landing page",
    description:
      "Curabitur dapibus sem purus, nec mattis nibh vestibulum at. Aenean condimentum pellentesque tempor.",
    href: "",
    image: {
      src: "",
      alt: "",
    },
  },
  {
    title: "Corporate website",
    description:
      "Morbi a tempor mauris, non dictum urna. Curabitur ac dignissim turpis, sed ultrices arcu. Etiam a tortor nisl.",
    href: "",
    image: {
      src: "",
      alt: "",
    },
  },
]);
</script>