<template>
  <div class="BPoweredBy">
    <BIcon
      :icon="'zap'"
      :color="'lightgrey_default'"
      :size="18"
      style="margin-right: 0.5rem"
    ></BIcon>
    <span
      >Powered by Briza</span
    >
  </div>
</template>

<script>
import BIcon from './BIcon.vue';
export default {
  components: {
    BIcon,
  },
  props: ["icon", "size", "color"],
  name: "BPoweredBy",
};
</script>