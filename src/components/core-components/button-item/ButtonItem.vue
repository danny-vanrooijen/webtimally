<template>
  <button
    v-if="button"
    :type="type"
    :class="buttonClasses"
  >
    <slot />
    <i
      class="hidden md:inline-block"
      :class="buttonIconClasses"
    ></i>
  </button>
  <a
    v-else
    :href="href"
    :class="buttonClasses"
  >
    <slot />
    <i :class="buttonIconClasses"></i>
  </a>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  borderedWhite: {
    type: Boolean,
    default: false,
  },
  text: {
    type: Boolean,
    default: false,
  },
  button: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed(() => {
  return [
    "relative inline-flex h-12 items-center justify-self-center rounded bg-gradient-to-br from-pink to-purple text-white md:justify-self-start",
    {
      "border border-transparent border-gradient-br-pink-purple-black":
        props.bordered,
    },
    {
      "border border-transparent border-gradient-br-pink-purple-white":
        props.borderedWhite,
    },
    { "bg-clip-text p-0 text-transparent": props.text },
    { "px-5 py-2.5": !props.text },
  ];
});

const buttonIconClasses = computed(() => {
  return [
    "fa-solid fa-arrow-right ml-3.5",
    {
      "bg-gradient-to-br from-pink to-purple bg-clip-text text-transparent":
        props.text,
    },
  ];
});
</script>
