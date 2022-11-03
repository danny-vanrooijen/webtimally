<template>
  <button v-if="button" class="button" :type="type" :class="buttonClasses">
    <slot />
    <i class="fa-solid fa-arrow-right hidden sm:inline-block"></i>
  </button>
  <a v-else class="button" :href="href" :class="buttonClasses">
    <slot />
    <i class="fa-solid fa-arrow-right hidden sm:inline-block"></i>
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
  button: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed(() => {
  return [
    { "button--border": props.bordered },
    { "button--border-white": props.borderedWhite },
  ];
});
</script>

<style lang="postcss" scoped>
.button {
  @apply h-12 inline-flex items-center justify-self-center sm:justify-self-start px-5 py-2.5 bg-gradient-to-br from-pink to-purple text-white rounded relative;

  svg {
    @apply ml-3.5;
  }

  &--border {
    @apply border-gradient-br-pink-purple-black border-transparent border;
  }

  &--border-white {
    @apply border-gradient-br-pink-purple-white border-transparent border;
  }

  &--text {
    @apply bg-clip-text text-transparent p-0;
  }
}
</style>
