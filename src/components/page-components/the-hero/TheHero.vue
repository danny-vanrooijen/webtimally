<template>
  <section class="relative m-0">
    <div class="tpl-image h-[375px] sm:h-[800px] brightness-50">
      <img src="http://placeimg.com/1920/800/nature" alt="" />
    </div>
    <div
      class="
        absolute
        top-0
        left-0
        w-full
        h-full
        flex
        items-center
        justify-center
        text-white text-center
      "
    >
      <div class="tpl-container sm:w-2/3 justify-center">
        <h1 class="text-white mb-8">
          We will implement any task for your project
        </h1>
        <div class="sm:px-44 mb-10 sm:mb-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt
        </div>
        <button-item bordered href="/read-more">Read more</button-item>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonItem from "@/components/core-components/button-item/ButtonItem.vue";
</script>