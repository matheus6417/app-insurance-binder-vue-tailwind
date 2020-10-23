<template>
  <div
    class="p-3 px-5 absolute w-full bottom-0 left-0 text-white flex justify-between"
    :style="{
      backgroundColor:
        $store.state.appCustomData.globalProps.colors[
          $attrs.bgColor ? $attrs.bgColor : 'blue_default'
        ].color,
      color:
        $store.state.appCustomData.globalProps.colors[
          $attrs.color ? $attrs.color : 'white_default'
        ].color,
    }"
  >
    <span
      class="my-auto"
      v-if="$store.state.currentQuestion <= $store.getters.questionItems.length"
    >
      {{ $store.state.currentQuestion }}/{{
        $store.getters.questionItems.length
      }}
    </span>
    <span class="my-auto" v-else> Completed! </span>

    <div class="inline-flex">
      <button
        class="bg-white hover:bg-gray-200 py-1 px-1 rounded mr-1"
        :disable="!canGoTo('prev')"
        @click="
          canGoTo('prev')
            ? $store.commit(
                'changeCurrentQuestion',
                $store.state.currentQuestion - 1
              )
            : void 0
        "
        :class="canGoTo('prev') ? 'bg-white' : 'bg-gray-400 cursor-not-allowed'"
      >
        <BIcon :icon="'chevron-up'" :color="'black_default'"></BIcon>
      </button>
      <button
        class="hover:bg-gray-200 py-1 px-1 rounded"
        :class="canGoTo('next') ? 'bg-white' : 'bg-gray-400 cursor-not-allowed'"
        :disable="!canGoTo('next')"
        @click="
          canGoTo('next')
            ? $store.commit(
                'changeCurrentQuestion',
                $store.state.currentQuestion + 1
              )
            : void 0
        "
      >
        <BIcon :icon="'chevron-down'" :color="'black_default'"></BIcon>
      </button>
    </div>
  </div>
</template>

<script>
import BIcon from "../atoms/BIcon.vue";
export default {
  components: {
    BIcon,
  },
  name: "BFormFooter",
  methods: {
    canGoTo(to) {
      if (
        to === "next" &&
        this.$store.state.currentQuestion >=
          this.$store.getters.questionItems.length
      ) {
        return false;
      }
      if (to === "prev" && this.$store.state.currentQuestion <= 1) {
        return false;
      }
      return true;
    },
  },
};
</script>