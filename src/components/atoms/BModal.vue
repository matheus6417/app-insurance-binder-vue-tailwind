<template>
  <div class="BModal__wrapper">
    <div class="BModal__overlay"></div>
    <div class="BModal__card">
      <div class="BModal__content">
        <div class="BModal__header">
          <img
            class="BModal__header-logo"
            v-show="$store.state.currentStep !== 0"
            :src="$store.state.appCustomData.globalProps.logoSrc"
          />
          <span></span>
          <div class="BModal__header-close" @click="$router.go()">
            <BIcon :size="24" :icon="'x'"></BIcon>
          </div>
        </div>
        <div class="BModal__inner">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BIcon from "./BIcon.vue";
export default {
  components: {
    BIcon,
  },
  name: "BModal",
};
</script>