<template>
  <component :is="component" v-bind="renderBlock.props" :uid="renderBlock.id" />
</template>

<script>
export default {
  name: "Molecule",
  props: {
    renderBlock: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      component: null,
    };
  },

  watch: {
    "renderBlock.component": {
      immediate: true,
      async handler() {
        try {
          this.component = (await this.renderBlock.component()).default;
        } catch (error) {
          console.error(error);
        }
      },
    },
  },
};
</script>