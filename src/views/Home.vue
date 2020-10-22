<template>
  <div>
    <BModal>
      <Molecule
        v-for="renderBlock in renderBlocks"
        :key="renderBlock.id"
        :render-block="renderBlock"
      />
    </BModal>
  </div>
</template>
<script>
import Molecule from "../system/Molecule.vue";
import BModal from "../components/atoms/BModal.vue";
export default {
  components: {
    BModal,
    Molecule,
  },
  data() {
    return {};
  },
  computed: {
    storeCustomData() {
      return this.$store.state.appCustomData;
    },
    renderBlocks() {
      return this.storeCustomData.steps[
        this.$store.state.currentPage
      ].components.map((component) => {
        return {
          id: component.id,
          path: this.storeCustomData.componentsLibrary[component.id].src,
          props: this.storeCustomData.componentsLibrary[component.id].props,
          component: () =>
            import(
              "../components/" +
                this.storeCustomData.componentsLibrary[component.id].src
            ),
        };
      });
    },
  },
};
</script>