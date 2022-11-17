<template>
  <section class="relative m-0">
    <div class="tpl-image h-[375px] brightness-50 md:h-[800px]">
      <img
        src="/src/assets/images/hero.jpg"
        alt=""
      />
    </div>
    <div
      class="absolute top-0 left-0 flex h-full w-full items-center justify-center text-center text-white"
    >
      <div class="tpl-container justify-center md:w-2/3">
        <h1 class="mb-8 text-white">
          We are <mark>passionate</mark> about building high quality web
          solutions
        </h1>
        <!-- <div class="mb-10 md:mb-16 md:px-44">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </div> -->
        <!-- <button-item
          bordered
          href="/read-more"
        >
          Read more
        </button-item> -->
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonItem from "@/components/core-components/button-item/ButtonItem.vue";
</script>
