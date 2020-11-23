<template>
  <div :class="[
      'BListItem__wrapper',
      `BListItem__wrapper--${item.description && item.size ? item.size : 'sm'}`,
    ]">
    <BAvatar
      :size="'sm'"
      class="BListItem__avatar"
    >
      {{ item.icon }}
    </BAvatar>
    <div class="BListItem__content">
      <p :class="['BListItem__text', `BListItem--${item.size || 'sm'}`]">
        {{ item.text }}
      </p>
      <span class="BListItem__description">{{ item.description }}</span>
    </div>
  </div>
</template>
<script>
  import BAvatar from "../atoms/BAvatar.vue";
  export default {
    components: {
      BAvatar,
    },
    props: ["item", "size"],
    name: "BListItem",
  };

</script>
