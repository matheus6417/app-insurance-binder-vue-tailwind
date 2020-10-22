<template>
  <div
    class="fixed w-full h-full top-0 left-0 flex items-center justify-center"
  >
    <div class="absolute w-full h-full bg-gray-900 opacity-50"></div>
    <div
      class="bg-white w-full h-full w-11/12 md:h-auto md:max-w-xl mx-auto rounded shadow-lg z-10 overflow-y-auto"
    >
      <div
        class="h-full text-left w-full flex-grow flex-col justify-center align-center vertical-center align-middle"
      >
        <div class="flex justify-between pb-3 m-4 top-0">
          <BImg
            v-show="$store.state.currentStep !== 0"
            :src="$store.state.appCustomData.globalProps.logoSrc"
          ></BImg>
          <span></span>
          <div class="cursor-pointer">
            <svg
              class="fill-current text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 18 18"
            >
              <path
                d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
              ></path>
            </svg>
          </div>
        </div>
        <div class="m-auto overflow-scroll md:h-auto" style="height: 480px">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BImg from "./BImg.vue";
export default {
  components: {
    BImg,
  },
  name: "Bmodal",
};
</script>