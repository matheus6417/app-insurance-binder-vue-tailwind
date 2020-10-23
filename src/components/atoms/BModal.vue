<template>
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div class="absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div
      class="bg-white w-full h-full w-11/12 md:h-auto md:max-w-3xl mx-auto rounded shadow-lg z-10 overflow-auto"
    >
      <div
        class="h-full text-left flex-col justify-center align-center vertical-center align-middle sm:relative overflow-auto"
      >
        <div class="flex justify-between m-4 top-0">
          <img
            v-show="$store.state.currentStep !== 0"
            :src="$store.state.appCustomData.globalProps.logoSrc"
          />
          <span></span>
          <div class="cursor-pointer">
            <BIcon :icon="'x'"></BIcon>
          </div>
        </div>
        <div class="m-auto overflow-y-scroll md:h-auto pb-32 pt-10 md:h-auto px-6" style="height: 580px">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BIcon from './BIcon.vue';
export default {
  components: {
    BIcon,
  },
  name: "Bmodal",
};
</script>