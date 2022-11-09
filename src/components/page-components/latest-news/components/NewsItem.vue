<template>
  <a class="col-span-12 sm:col-span-4 bg-white shadow-md" :href="href">
    <div class="tpl-image aspect-w-16 aspect-h-9">
      <img :src="image.src" :alt="image.alt" />
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
          {{ date }}
        </div>
      </div>
    </div>
    <div class="p-4 sm:p-5">
      <h3 class="line-clamp-2">
        {{ title }}
      </h3>
      <div class="mt-5 sm:mt-7" href="#">
        {{ button }}
        <circle-cta small />
      </div>
    </div>
  </a>
</template>

<script setup>
import { computed } from "vue";
import CircleCta from "@/components/core-components/circle-cta/CircleCta.vue";

const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
});

const href = computed(() => props.newsItem.href);
const image = computed(() => props.newsItem.image);
const date = computed(() => props.newsItem.date);
const title = computed(() => props.newsItem.title);
const button = computed(() => props.newsItem.button);
</script>