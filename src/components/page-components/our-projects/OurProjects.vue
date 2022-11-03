<template>
  <section>
    <div class="tpl-container tpl-grid mb-8">
      <h2 class="col-span-6 sm:col-span-4">Our completed projects</h2>
      <a
        class="
          col-span-6
          sm:col-span-4 sm:col-start-9
          text-right
          grid
          items-end
        "
      >
        <span>See all<i class="fa-solid fa-arrow-right ml-2.5"></i> </span>
      </a>
    </div>
    <div class="tpl-container tpl-grid">
      <div class="col-span-12 sm:col-span-4">
        <a href="">
          <div class="tpl-image aspect-w-1 aspect-h-1">
            <div class="brightness-50">
              <img src="http://placeimg.com/1920/800/nature" alt="" />
            </div>
            <div
              class="
                absolute
                top-0
                left-0
                right-0
                bottom-0
                grid
                items-center
                p-12
                text-white text-center
              "
            >
              <div class="flex flex-col items-center">
                <span
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor</span
                >
                <circle-cta class="mt-6" />
              </div>
            </div>
          </div>
          <div class="mt-1 sm:mt-2.5">Online store</div>
        </a>
      </div>
      <div class="col-span-12 sm:col-span-4 sm:-translate-y-24">
        <a href="">
          <div class="tpl-image aspect-w-1 aspect-h-1">
            <div class="brightness-50">
              <img src="http://placeimg.com/1920/800/arch" alt="" />
            </div>
            <div
              class="
                absolute
                top-0
                left-0
                right-0
                bottom-0
                grid
                items-center
                p-12
                text-white text-center
              "
            >
              <div class="flex flex-col items-center">
                <span
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor</span
                >
                <circle-cta class="mt-6" />
              </div>
            </div>
          </div>
          <div class="mt-1 sm:mt-2.5">Landing page</div>
        </a>
      </div>
      <div class="col-span-12 sm:col-span-4">
        <a href="">
          <div class="tpl-image aspect-w-1 aspect-h-1">
            <div class="brightness-50">
              <img src="http://placeimg.com/1920/800/tech" alt="" />
            </div>
            <div
              class="
                absolute
                top-0
                left-0
                right-0
                bottom-0
                grid
                items-center
                p-12
                text-white text-center
              "
            >
              <div class="flex flex-col items-center">
                <span
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor</span
                >
                <circle-cta class="mt-6" />
              </div>
            </div>
          </div>
          <div class="mt-1 sm:mt-2.5">Corporate website</div>
        </a>
      </div>
    </div>
    <div class="tpl-container">
      <div class="bg-grey-100 my-12 sm:my-16 h-0.5"></div>
    </div>
    <div class="tpl-container tpl-grid gap-5 gap-y-8">
      <div class="col-span-full sm:col-span-2 tpl-grid sm:flex sm:flex-col">
        <h2 class="col-span-6">Our services</h2>
        <a class="col-span-6 text-right sm:text-left grid items-end">
          <span>See all<i class="fa-solid fa-arrow-right ml-2.5"></i> </span>
        </a>
      </div>
      <div
        class="
          col-span-full
          sm:col-span-10
          grid grid-cols-4
          gap-4 gap-y-8
          sm:gap-0 sm:divide-x sm:divide-grey-900/20 sm:-mr-4
        "
      >
        <div class="col-span-2 sm:col-span-1 sm:px-4">
          <div class="mb-5">ICON</div>
          <h3>Web Design</h3>
          <p class="line-clamp-2 sm:line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
            smod tempor
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 sm:px-4">
          <div class="mb-5">ICON</div>
          <h3>Web Development</h3>
          <p class="line-clamp-2 sm:line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 sm:px-4">
          <div class="mb-5">ICON</div>
          <h3>SEO &amp; Marketing</h3>
          <p class="line-clamp-2 sm:line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
            smod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiu smod tempor
          </p>
        </div>
        <div class="col-span-2 sm:col-span-1 sm:px-4">
          <div class="mb-5">ICON</div>
          <h3>Brand Creation</h3>
          <p class="line-clamp-2 sm:line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiu
            smod tempor Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import CircleCta from "@/components/core-components/circle-cta/CircleCta.vue";
</script>