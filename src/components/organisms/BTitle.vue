<template>
  <div class="flex-col justify-center align-center text-center mb-8">
    <BAvatar v-bind="$attrs" class="mb-4">
      <BIcon :icon="$attrs.icon"></BIcon>
    </BAvatar>
    <div class="text-4xl">{{ $attrs.title }}</div>
  </div>
</template>

<script>
import BIcon from "../atoms/BIcon.vue";
import BAvatar from "../atoms/BAvatar.vue";
export default {
  components: {
    BAvatar,
    BIcon,
  },
  name: "BTitle",
};
</script>