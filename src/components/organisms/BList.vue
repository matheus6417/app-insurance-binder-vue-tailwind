<template>
  <div class="mb-10 mx-auto w-full md:max-w-lg">
    <BListItem
      v-for="(item, i) in $attrs.Items"
      :item="item"
      :key="i"
    ></BListItem>
  </div>
</template>

<script>
import BListItem from "../molecules/BListItem.vue";
export default {
  components: {
    BListItem,
  },
  name: "BList",
};
</script>