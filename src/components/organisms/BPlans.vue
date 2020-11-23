<template>
  <div class="BPlans">
    <div :class="planSelected ? 'BPlans-selectedcoverage' : 'BPlans-grid'">
      <div
        @click="planSelected = plan.name"
        class="BPlans__cards-wrapper"
        v-for="(plan, i) in $attrs.plans.filter((plan) =>
          planSelected ? plan.name === planSelected : plan
        )"
        :key="i"
      >
        <div
          class="BPlan__card"
          :class="planSelected === plan.name ? 'BPlan__card--active' : ''"
        >
          <div class="BPlan__img-wrapper">
            <img :src="`img/${plan.imageSrc}.png`" />
          </div>
          <div class="BPlan__rating-wrapper">
            <BRating :rating="plan.rating"></BRating>
          </div>
          <span class="BPlan__price"
            >{{ plan.priceTag
            }}<span class="BPlan__price--period"
              >/{{ plan.priceTagPeriod }}</span
            >
          </span>
          <div class="BPlan__subprice">
            {{ plan.subpriceTag }}
          </div>
          <div
            v-if="!isCheckout"
            class="BPlan__btn-wrapper"
            @click="planSelected = plan.name"
          >
            <BBtn
              class="BPlan__btn"
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
import BRating from '../atoms/BRating.vue';
export default {
  components: {
    BRating,
    BBtn,
  },
  computed: {
    isCheckout() {
      return this.$store.state.appCustomData.steps[this.$store.state.currentStep].name === 'Checkout'
    }
  },
  data() {
    return {
      planSelected: null,
    };
  },
  name: "BPlans",
};
</script>