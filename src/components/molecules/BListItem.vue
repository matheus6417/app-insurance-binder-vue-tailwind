<template>
  <div class="flex mb-5 mx-auto">
    <BAvatar :size="'8'" class="mr-5">
      <div class="m-auto">
        {{ item.icon }}
      </div>
    </BAvatar>
    <div :class="`text-${item.size ? item.size : 'base'}`">
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