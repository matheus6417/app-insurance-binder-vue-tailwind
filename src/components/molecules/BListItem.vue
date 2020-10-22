<template>
  <div class="flex mb-3 mx-auto">
    <BAvatar :size="'8'" class="mr-5">
      <div class="m-auto">
        {{ item.icon }}
      </div>
    </BAvatar>
    {{ item.text }}
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