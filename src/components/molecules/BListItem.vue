<template>
  <div class="flex mb-5 mx-auto">
    <BAvatar :size="'10'" class="mr-5">
      {{ item.icon }}
    </BAvatar>
    <div class="my-auto">

      {{ item.text }}
    </div>
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