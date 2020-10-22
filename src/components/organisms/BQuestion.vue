<template>
  <div class="mb-8 mx-auto w-full md:max-w-lg px-6 text-3x1">
    <BListItem
      :item="{
        text: $attrs.text,
        icon: $attrs.icon,
      }"
    ></BListItem>
    {{ $attrs }}
  </div>
</template>

<script>
import BListItem from "../molecules/BListItem.vue";
export default {
  components: {
    BListItem,
  },
  name: "BQuestion",
};
</script>