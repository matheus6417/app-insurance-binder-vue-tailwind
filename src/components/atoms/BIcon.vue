<template>
  <object
    type="image/svg+xml"
    :data="`img/${icon}.svg`"
    :class="`w-${size ? size : 'auto'}`"
    :style="{
      stroke:
        $store.state.appCustomData.globalProps.colors[
          $attrs.bgColor ? $attrs.bgColor : 'blue_default'
        ].color,
    }"
  >
    {{ icon }}
  </object>
</template>

<script>
export default {
  props: ["icon", "size"],
  name: "BIcon",
};
</script>
<style>
svg.feather {
  stroke: antiquewhite;
}
</style>