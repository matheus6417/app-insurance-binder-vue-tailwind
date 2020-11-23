<template>
  <div
    :class="
      isCurrentQuestionFocused ? 'BQuestion' : 'BQuestion BQuestion--focused'
    "
  >
    <BListItem
      class="BQuestion__BListItem"
      :item="{
        text: $attrs.text,
        description: $attrs.description,
        icon: $attrs.icon,
        size: 'md',
      }"
    ></BListItem>
    <template v-if="$attrs.type === 'options'">
      <div class="BQuestion--options-grid">
        <BOption
          :choosen="
            $attrs.answer === option.title && toggledOption === option.title
          "
          @set-answer="setFormAnswer"
          v-for="(option, i) in $attrs.options"
          :key="i"
          :option="option"
          :is-toggled="toggledOption === option.title"
        ></BOption>
      </div>
    </template>
    <template v-if="$attrs.type === 'text'">
      <BInput @set-answer="setFormAnswer"></BInput>
    </template>
    <template v-if="$attrs.type === 'phone'">
      <BInput
        @set-answer="setFormAnswer"
        :type="'tel'"
        :mask="'###-###-####'"
        :placeholder="'111-111-1111'"
      ></BInput>
    </template>
    <template v-if="$attrs.type === 'select'">
      <BSelect
        :type="'text'"
        @set-answer="setFormAnswer"
        :options="$attrs.options"
        :placeholder="'Select state'"
      ></BSelect>
    </template>
    <template v-if="$attrs.type === 'date'">
      <BDate
        @set-answer="setFormAnswer"
        :type="'date'"
        :mask="'##/##/####'"
        :placeholder="'dd/mm/yyyy'"
      ></BDate>
    </template>
  </div>
</template>
<script>
import BListItem from "../molecules/BListItem.vue";
import BOption from "../molecules/BOption.vue";
import BInput from "../atoms/BInput.vue";
import BSelect from '../atoms/BSelect.vue';
import BDate from '../atoms/BDate.vue';
export default {
  components: {
    BDate,
    BSelect,
    BInput,
    BOption,
    BListItem,
  },
  data(){
    return {
      toggledOption: null
    }
  },
  name: "BQuestion",
  methods: {
    setFormAnswer(answer) {
      this.toggledOption = answer.title || null
      setTimeout(() => {
        this.$store.commit("setFormAnswer", {
          questionID: this.$attrs.uid,
          answer: answer,
        });
        this.$store.commit(
          "changeCurrentQuestion",
          this.$store.state.currentQuestion + 1
        );
      }, 300);
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