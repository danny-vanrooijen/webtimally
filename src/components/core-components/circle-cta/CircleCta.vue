<template>
  <span
    class="
      inline-flex
      ml-2
      bg-gradient-to-br
      from-pink
      to-purple
      text-white
      rounded-full
      items-center
      justify-center
    "
    :class="[small ? 'w-7 h-7 text-xs' : 'w-12 h-12']"
  >
    <i class="fa-solid fa-arrow-right"></i>
  </span>
</template>

<script setup>
defineProps({
  small: {
    type: Boolean,
    default: false,
  },
});
</script>