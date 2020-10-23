<template>
  <div
    class="mb-20 mx-auto w-full md:max-w-2x1 text-3x1"
    :class="isCurrentQuestionFocused ? '' : 'opacity-25 pointer-events-none'"
  >
    <BListItem
      class="mb-12 text-3x1"
      :item="{
        text: $attrs.text,
        icon: $attrs.icon,
      }"
    ></BListItem>
    <template v-if="$attrs.type === 'options'">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <BOption
          :choosen="$attrs.answer === option.title"
          @setAnswer="setFormAnswer"
          v-for="(option, i) in $attrs.options"
          :key="i"
          :option="option"
        ></BOption>
      </div>
    </template>
    <template v-if="$attrs.type === 'text'">
      <BInput @setAnswer="setFormAnswer"></BInput>
    </template>
  </div>
</template>

<script>
import BListItem from "../molecules/BListItem.vue";
import BOption from "../molecules/BOption.vue";
import BInput from "../atoms/BInput.vue";
export default {
  components: {
    BInput,
    BOption,
    BListItem,
  },
  name: "BQuestion",
  methods: {
    setFormAnswer(answer) {
      this.$store.commit("setFormAnswer", {
        questionID: this.$attrs.uid,
        answer: answer,
      });
      this.$store.commit(
        "changeCurrentQuestion",
        this.$store.state.currentQuestion + 1
      );
    },
  },
  computed: {
    isCurrentQuestionFocused() {
      return (
        this.$store.getters.questionItems.findIndex(
          (question) => question.id === this.$attrs.uid
        ) +
          1 ===
        this.$store.state.currentQuestion
      );
    },
  },
};
</script>