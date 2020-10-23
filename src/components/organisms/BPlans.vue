<template>
  <div class="w-full md:max-w-2xl mx-auto">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div
        @click="planSelected = i"
        class="flex-col mx-auto w-full cursor-pointer"
        v-for="(plan, i) in $attrs.plans"
        :key="i"
      >
        <div
          class="bg-white rounded p-4 flex-col shadow hover:shadow-md w-full text-center"
          :class="
            planSelected === i ? 'border-blue-500 border-4' : 'border-2 border-gray-400'
          "
        >
          <div class="my-2 h-12 flex">
            <img class="m-auto" :src="`img/${plan.imageSrc}.png`" />
          </div>
          <div class="my-2 mb-10">stars</div>
          <div class="text-lg">
            <span class="text-4xl text-bold">{{ plan.priceTag }}</span
            >/{{ plan.priceTagPeriod }}
          </div>
          <div class="my-none text-gray-600 text-bold mb-12">
            {{ plan.subpriceTag }}
          </div>
          <div class="relative flex">
            <BBtn
              class="mx-none px-none md:max-w-none m-none"
              :text="$attrs.buttonText"
              :action="'nextstep'"
              v-bind="$attrs"
            ></BBtn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BBtn from "../atoms/BBtn.vue";
export default {
  components: {
    BBtn,
  },
  data(){
    return {
      planSelected: null
    }
  },
  name: "BPlans",
};
</script>