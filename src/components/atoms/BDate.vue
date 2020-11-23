<template>
  <div class="BDate__wrapper">
    <div class="BDate__input-wrapper">
      <div class="BDate__input">
        
        <input
          v-on:keyup.enter="emitAnswer"
          v-model="inputdata"
          v-mask="mask"
          :placeholder="placeholder"
          type="tel"
          @input="this.errors = null"
          @change="this.errors = null"
          masked="true"
          class="BDate__field"
        />
      </div>
      <span class="BDate__icon">
        <BIcon :icon="'calendar'" :size="34" :color="'blue_default'"></BIcon>
      </span>
    </div>
    <BFormErrors :errors="errors"></BFormErrors>
    <BFormBtn
      :disabled="errors && errors.length"
      @click="emitAnswer"
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
    mask: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'date'
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
  },
  data() {
    return {
      inputdata: "",
    }
  }
}
</script>