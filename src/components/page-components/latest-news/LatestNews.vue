<template>
  <section>
    <div class="tpl-container tpl-grid">
      <div class="col-span-12 sm:col-span-4">
        <h2 class="mb-6">Want to keep abreast of the latest news</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <a class="tpl-button tpl-button--text mt-7" href="#"
          >See all<i class="fa-solid fa-arrow-right fill-gradient-linear"></i
        ></a>
      </div>
      <a class="col-span-12 sm:col-span-4 bg-white shadow-md" href="#">
        <div class="tpl-image aspect-w-16 aspect-h-9">
          <img src="http://placeimg.com/1920/800/tech" alt="" />
          <div>
            <div
              class="
                absolute
                bottom-4
                left-4
                sm:left-5
                bg-gradient-to-br
                from-pink
                to-purple
                text-white
                px-2.5
                py-0.5
              "
            >
              12 October
            </div>
          </div>
        </div>
        <div class="p-4 sm:p-5">
          <h3 class="line-clamp-2">
            How does web studio work and who should be part of the team
          </h3>
          <div class="mt-5 sm:mt-7" href="#">
            Read more
            <circle-cta small />
          </div>
        </div>
      </a>
      <a class="col-span-12 sm:col-span-4 bg-white shadow-md" href="#">
        <div class="tpl-image aspect-w-16 aspect-h-9">
          <img src="http://placeimg.com/1920/800/nature" alt="" />
          <div>
            <div
              class="
                absolute
                bottom-4
                left-4
                sm:left-5
                bg-gradient-to-br
                from-pink
                to-purple
                text-white
                px-2.5
                py-0.5
              "
            >
              10 October
            </div>
          </div>
        </div>
        <div class="p-4 sm:p-5">
          <h3 class="line-clamp-2">
            Website development for an industrial enterprise: what is going on
            and why is it four sentences?
          </h3>
          <div class="mt-5 sm:mt-7">
            Read more
            <circle-cta small />
          </div>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup>
import CircleCta from "@/components/core-components/circle-cta/CircleCta.vue";
</script>