<template>
  <div class="flex mb-5 mx-auto">
    <BAvatar :size="'10'" class="mr-5 my-auto">
      {{ item.icon }}
    </BAvatar>
    <p class="my-auto" :style="item.fontStyle">{{ item.text }}</p>
  </div>
</template>

<script>
import BAvatar from "../atoms/BAvatar.vue";
export default {
  components: {
    BAvatar,
  },
  props: ["item"],
  name: "BListItem",
};
</script>