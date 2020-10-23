<template>
  <button
    class="hover:opacity-75 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-md w-full md:max-w-xs mx-6"
    :style="{
      backgroundColor:
        $store.state.appCustomData.globalProps.colors[
          $attrs.color ? $attrs.color : 'primary_default'
        ].color,
    }"
     :class="isValid ? '' : 'opacity-50 cursor-not-allowed'"
      :disable="!isValid"
      @click="isValid ? clickAction(action) : void 0"
  > {{ text }}   
  {{}}

  </button>
</template>

<script>
export default {
  props: ["text", "action"],
  name: "BBtn",
  computed:{
    isValid(){
      const isFormStep = this.$store.state.appCustomData.steps.filter(step => step.name === 'Form')[0].components.filter(component => component.id === this.$attrs.uid)
      if (!isFormStep.length) return true
      return isFormStep.length && this.$store.state.currentQuestion > this.$store.getters.questionItems.length
    }
  },
  methods: {
    clickAction(action) {
      if (action.includes("http")) {
        Object.assign(document.createElement("a"), {
          target: "_blank",
          href: action,
        }).click();
      } else {
        this.$store.commit("changeStep", action);
      }
    },
  },
};
</script>