<template>
  <div :class="['BTitle__wrapper', `BTitle--${size || 'lg'}`]">
    <BAvatar v-bind="$attrs" :size="'lg'" class="BTitle__avatar">
      <BIcon :icon="$attrs.icon" :size="60"></BIcon>
    </BAvatar>
    <div class="BTitle__title">{{ $attrs.title }}</div>
    <div class="BTitle__text" v-if="$attrs.text">
      {{ $attrs.text }}
    </div>
  </div>
</template>

<script>
import BIcon from "../atoms/BIcon.vue";
import BAvatar from "../atoms/BAvatar.vue";
export default {
  props:['size'],
  components: {
    BAvatar,
    BIcon,
  },
  name: "BTitle",
};
</script>