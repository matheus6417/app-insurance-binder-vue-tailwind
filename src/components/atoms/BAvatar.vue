<template>
  <div :class="['BAvatar', `BAvatar--${size}`]">
    <div class="BAvatar__slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: 'lg'
    },
  },
  name: "BAvatar",
};
</script>