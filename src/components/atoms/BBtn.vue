<template>
  <button
    class="BBtn"
    :class="isValid ? '' : 'BBtn--disabled'"
    :disable="!isValid"
    @click="isValid ? clickAction(action) : void 0"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text", "action"],
  name: "BBtn",
  computed: {
    isValid() {
      const isFormStep = this.$store.state.appCustomData.steps
        .filter((step) => step.name === "Form")[0]
        .components.filter((component) => component.id === this.$attrs.uid);
      if (!isFormStep.length) return true;
      return (
        isFormStep.length &&
        this.$store.state.currentQuestion >
          this.$store.getters.questionItems.length
      );
    },
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
}
</script>