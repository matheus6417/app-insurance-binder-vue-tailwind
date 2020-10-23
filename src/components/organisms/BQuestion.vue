<template>
  <div
    class="mb-8 mx-auto w-full md:max-w-2xl px-6 text-3x1"
    :class="isCurrentQuestionFocused ? '' : 'opacity-25'"
  >
    <BListItem
      class="mb-12 text-4x1"
      :item="{
        text: $attrs.text,
        icon: $attrs.icon,
      }"
    ></BListItem>
    <template v-if="$attrs.type === 'options'">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BOption
          v-for="(option, i) in $attrs.options"
          :key="i"
          :option="option"
        ></BOption>
      </div>
    </template>
    <template v-if="$attrs.type === 'text'">
      <BInput></BInput>
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
  computed: {
    isCurrentQuestionFocused() {
      return this.questionItems.findIndex(question => question.id === this.$attrs.uid) + 1 === this.$store.state.currentQuestion;
    },
    questionItems(){
      return this.$store.state.appCustomData.steps.filter(step => step.name === 'Form')[0].components.filter(component => component.type === 'form')
    },
  },
};
</script>