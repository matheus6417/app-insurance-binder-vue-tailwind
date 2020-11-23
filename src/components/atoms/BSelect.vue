<template>
  <div class="BSelect">
    <div class="BInput__wrapper BSelect__wrapper" @click="expanded = !expanded">
      <input
        v-on:keyup.enter="expanded = !expanded"
        @click="expanded = !expanded"
        @input="this.errors = null"
        disabled
        v-model="inputdata"
        class="BInput__field"
      />
      <span class="BSelect__icon">
        <BIcon :icon="'chevron-down'" :color="'black_default'"></BIcon>
      </span>
      <div v-if="expanded" class="BSelect__options-wrapper">
        <div class="BSelect__options-list">
          <div
            v-for="(option, i) in options"
            v-on:keyup.enter="chooseOption(option.name)"
            :key="i"
            @click.stop="chooseOption(option.name)"
            class="BSelect__options-item"
          >
            {{ option.name }}
          </div>
        </div>
      </div>
    </div>
    <BFormErrors :errors="errors"></BFormErrors>
    <BFormBtn
      @click="emitAnswer"
      :disabled="errors && errors.length"
    ></BFormBtn>
  </div>
</template>
<script>
import BIcon from "./BIcon.vue";
import BFormBtn from './BFormBtn.vue';
import BFormErrors from './BFormErrors.vue';
import validationMixin from '../../mixins/validations'
export default {
  mixins: [validationMixin],
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    options: {
      type: Array,
      default: []
    },
     type: {
      type: String,
      default: 'text'
    },
  },
  components: {
    BFormErrors,
    BFormBtn,
    BIcon,
  },
  name: "BSelect",
  methods:{
    emitAnswer(){
      if (this.errors && this.errors.length) return
      this.errors = this.validateForm(this.inputdata, this.type);
      if(this.errors.formIsValid) {
        this.$emit('set-answer', this.inputdata)
      }
    },
    chooseOption(data) {
      this.expanded = false
      this.inputdata = data
    },  
  },
  data() {
    return {
      inputdata: "",
      expanded: false
    }
  }
}
</script>