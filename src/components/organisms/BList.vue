<template>
  <div class="BList">
    <BListItem
      v-for="(item, i) in $attrs.Items"
      :item="item"
      :key="i"
      :size="'sm'"
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