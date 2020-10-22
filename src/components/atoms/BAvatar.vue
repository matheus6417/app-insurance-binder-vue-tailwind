<template>
  <div>
    <div
      class="mx-auto rounded-full border flex justify-center align-center text-center vertical-align-center shadow-sm font-bold"
      :class="`w-${size ? size : '24'} h-${size ? size : '24'} `"
      :style="{
        backgroundColor:
          $store.state.appCustomData.globalProps.colors[
            $attrs.bgColor ? $attrs.bgColor : 'secondary_default'
          ].color,
        color:
          $store.state.appCustomData.globalProps.colors[
            $attrs.bgColor ? $attrs.bgColor : 'blue_default'
          ].color,
      }"
    >
      <div class="m-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["size"],
  name: "BAvatar",
};
</script>