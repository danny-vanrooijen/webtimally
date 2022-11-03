<template>
  <section class="relative py-20">
    <div class="absolute bg-black w-full sm:w-1/2 left-0 top-0 h-full"></div>
    <div class="tpl-container tpl-grid relative z-10">
      <div class="col-span-12 sm:col-span-4 sm:col-start-2 text-white">
        <h2 class="text-white mb-6">
          Do you want to discuss your future project?
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div class="col-span-12 sm:col-span-6 sm:col-start-7">
        <form class="tpl-grid grid-cols-2" action="#">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email" required />
          <input type="text" placeholder="Phone" required />
          <input type="text" placeholder="Theme" required />
          <textarea
            class="col-span-2"
            name=""
            id=""
            cols="30"
            rows="2"
            placeholder="Message"
          ></textarea>
          <div class="col-span-2 flex justify-center">
            <button-item button type="submit">Send message</button-item>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import ButtonItem from "@/components/core-components/button-item/ButtonItem.vue";
</script>