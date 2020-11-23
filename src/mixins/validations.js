const DATEREGEX = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
let isPastDate = function(dateInfo){
  let selectedDate = new Date(dateInfo);
  let now = new Date();
  if (selectedDate > now) {
    return false
  } else {
    return true
  }
}
const validationMixin = {
  methods: {
    validateField(inputType, value) {
      return this.validationRules[inputType]
        .filter(rule => {
          const isValid = rule(value);
          if (isValid !== true) {
            return isValid;
          }
        })
        .map(rule => rule(value))
    },
    validateForm(inputdata, inputType) {
      let formErrors = {};
      let formIsValid = true;
      const errors = this.validateField(inputType, inputdata);
      if (errors.length) {
        formIsValid = false;
      }
      formErrors = errors;
      formErrors.formIsValid = formIsValid;
      return formErrors;
    },
  },
  data: () => ({
    errors: [],
    validationRules: {
      text: [
        value => !!value || 'This field is required',
        value => (value.length <= 30) || 'This field must be less than 30 characters'
      ],
      tel: [
        value => !!value || 'This field is required',
        value => value.length === 12 || 'Please enter the complete phone number'
      ],
      date: [
        value => value.length >= 10 || 'This field is required',
        value => DATEREGEX.test(value) || 'Please enter a valid date',
        value => isPastDate(value) || 'Date must be in the past'
      ]
    }
  })
}
export default validationMixin;