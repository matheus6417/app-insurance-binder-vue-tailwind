<template>
  <svg
    :width="size ? size : '24'"
    :height="size ? size : '24'"
    fill="none"
    :stroke="
      $store.state.appCustomData.globalProps.colors[
        color || 'blue_default'
      ].color"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <use :xlink:href="`img/feather-sprite.svg#${this.icon}`" />
  </svg>
</template>

<script>
export default {
  props: ["icon", "size", "color"],
  name: "BIcon",
};
</script>