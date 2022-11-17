<template>
  <div class="tpl-container tpl-grid mb-8">
    <h2 class="col-span-6 md:col-span-4">Our work</h2>
    <!-- <a
        href="/our-work"
        class="col-span-6 grid items-end text-right md:col-span-4 md:col-start-9"
      >
        <span>
          See all our work<i class="fa-solid fa-arrow-right ml-2.5"></i>
        </span>
      </a> -->
  </div>
  <div class="tpl-container tpl-grid">
    <template
      v-for="(project, index) in projects"
      :key="project.title"
    >
      <project-item
        :project="project"
        :index="index"
      />
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ProjectItem from "./ProjectItem.vue";

const projects = ref([
  {
    title: "Veterinary clinic Dyrlæge på bryggertorvet",
    description: "A highly personalised and easy-to-use wordpress website",
    href: null,
    image: {
      src: "/src/assets/images/cat-in-clinic.jpg",
      alt: "Cat in clinic",
    },
  },
  {
    title: "Nord Space ApS",
    description: "Wordpress website maintenance",
    href: null,
    image: {
      src: "/src/assets/images/telescope-on-mountain.jpg",
      alt: "Telescope on mountain",
    },
  },
  {
    title: "DTU (Technical University of Denmark)",
    description: "Wordpress website maintenance",
    href: null,
    image: {
      src: "/src/assets/images/open-book-on-table.jpg",
      alt: "University book on table",
    },
  },
]);
</script>
