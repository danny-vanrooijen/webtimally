<template>
  <section>
    <div class="tpl-container tpl-grid">
      <div class="col-span-12 sm:col-span-4">
        <h2 class="mb-6">Want to keep abreast of the latest news</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <button-item href="/news" text>
          <span>See all</span>
        </button-item>
      </div>
      <news-item
        v-for="(news, index) in newsItems"
        :key="index"
        :news-item="news"
      />
    </div>
  </section>
</template>

<script setup>
import NewsItem from "./components/NewsItem.vue";
import ButtonItem from "@/components/core-components/button-item/ButtonItem.vue";

const newsItems = [
  {
    href: "#",
    image: {
      src: "http://placeimg.com/1920/800/tech",
      alt: "An alt text",
    },
    date: "12 October",
    title: "How does web studio work and who should be part of the team",
    button: "Read more",
  },
  {
    href: "#",
    image: {
      src: "http://placeimg.com/1920/800/nature",
      alt: "Another alt text",
    },
    date: "10 October",
    title:
      "Website development for an industrial enterprise: what is going on and why is it four sentences?",
    button: "Read more",
  },
];
</script>