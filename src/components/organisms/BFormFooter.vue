<template>
  <div class="BFormFooter__wrapper">
    <span
      class="BFormFooter__pagenumber"
      v-if="$store.state.currentQuestion <= $store.getters.questionItems.length"
    >
      {{ $store.state.currentQuestion }}/{{
        $store.getters.questionItems.length
      }}
    </span>
    <span class="BFormFooter__pagenumber" v-else> Completed! </span>

    <div class="BFormFooter__pagination-wrapper">
      <button
        class="BFormFooter__pagination-button"
        :class="
          canGoTo('prev')
            ? 'BFormFooter__pagination-button--active'
            : 'BFormFooter__pagination-button--inactive'
        "
        :disable="!canGoTo('prev')"
        @click="
          canGoTo('prev')
            ? $store.commit(
                'changeCurrentQuestion',
                $store.state.currentQuestion - 1
              )
            : void 0
        "
      >
        <BIcon :icon="'chevron-up'" :color="'black_default'"></BIcon>
      </button>
      <button
        class="BFormFooter__pagination-button"
        :class="
          canGoTo('next')
            ? 'BFormFooter__pagination-button--active'
            : 'BFormFooter__pagination-button--inactive'
        "
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
import BIcon from"../atoms/BIcon.vue";
export default {
  components: {
    BIcon,
  },
  name:"BFormFooter",
  methods: {
    canGoTo(to) {
      if (
        to ==="next" &&
        this.$store.state.currentQuestion >=
          this.$store.getters.questionItems.length
      ) {
        return false;
      }
      if (to ==="prev" && this.$store.state.currentQuestion <= 1) {
        return false;
      }
      return true;
    },
  },
  watch: {
    '$store.state.currentQuestion': {
      handler (questionIndex) {
        const el = document.querySelector(`[uid=${this.$store.getters.questionItems[questionIndex - 1] && this.$store.getters.questionItems[questionIndex - 1].id}]`)
        if (el) {
          el.scrollIntoView({behavior: 'smooth'});
        }
      },
      deep: true,
      immediate: true,
    },
  },
};
</script>