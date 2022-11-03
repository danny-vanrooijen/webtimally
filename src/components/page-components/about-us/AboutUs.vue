<template>
  <section class="bg-black text-white py-20">
    <div class="tpl-container tpl-grid">
      <div class="col-span-12 sm:col-span-7">
        <div class="tpl-image aspect-w-16 aspect-h-9">
          <img src="http://placeimg.com/1920/800/nature" alt="" />
        </div>
      </div>
      <div class="col-span-12 sm:col-span-5 grid gap-12">
        <h2 class="text-white">
          For <mark>10</mark> years now we have been responsible for your
          projects and we are proud of it!
        </h2>
        <div
          class="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center sm:text-left"
        >
          <div>
            <span class="block text-3xl"><mark>30</mark></span>
            <span class="block">experts</span>
          </div>
          <div>
            <span class="block text-3xl"><mark>15</mark></span>
            <span class="block">managers</span>
          </div>
          <div>
            <span class="block text-3xl"><mark>200</mark></span>
            <span class="block">projects</span>
          </div>
          <div>
            <span class="block text-3xl"><mark>24/7</mark></span>
            <span class="block">support</span>
          </div>
        </div>
        <button-item bordered href="#">See more</button-item>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonItem from "@/components/core-components/button-item/ButtonItem.vue";
</script>