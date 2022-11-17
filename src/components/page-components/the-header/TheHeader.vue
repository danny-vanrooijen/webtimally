<template>
  <header
    class="tpl-container flex h-[102px] items-center justify-between py-0"
  >
    <a
      href="/"
      class="w-48 bg-gradient-to-br from-pink to-purple bg-clip-text text-4xl font-bold text-transparent"
    >
      Webtimally
    </a>
    <div class="hidden md:block">
      <nav>
        <ul class="flex gap-12">
          <li><a href="about">About us</a></li>
          <li><a href="services">Our services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
    <div class="flex w-48 justify-end gap-10">
      <button-item href="tel:+24522110">Call us</button-item>
    </div>
  </header>
</template>

<script setup>
import ButtonItem from "@/components/core-components/button-item/ButtonItem.vue";
</script>
