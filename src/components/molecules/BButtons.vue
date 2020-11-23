<template>
  <div
    :class="[
      'BButtons__wrapper',
      isForm ? 'BButtons__wrapper--start' : 'BButtons__wrapper--center',
    ]"
    :style="alternativeStyle"
  >
    <BBtn
      v-for="(btn, i) in $attrs.buttons"
      :key="i"
      :text="btn.text"
      :action="btn.action"
      v-bind="$attrs"
    ></BBtn>
  </div>
</template>

<script>
import BBtn from "../atoms/BBtn.vue";
export default {
  components: {
    BBtn,
  },
  name: "BButtons",
 computed: {
    isCheckout() {
      return this.$store.state.appCustomData.steps[this.$store.state.currentStep].name === 'Checkout'
    },
    isForm() {
      return this.$store.state.appCustomData.steps[this.$store.state.currentStep].name === 'Form'
    },
    alternativeStyle(){
      const styles= {
        submitForm:{
          padding:'1.8rem 0 20rem 0'
       }
      }
      return this.$attrs.customlayout ? styles[this.$attrs.customlayout] : ''
    }
  }
};
</script>