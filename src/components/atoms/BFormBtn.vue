<template>
  <button
    :disable="disabled"
    :class="disabled ? 'BFormBtn BFormBtn--disabled' : 'BFormBtn'"
  >
    <span
      class="BFormBtn-content"
      >OK</span
    >
    <BIcon :icon="'check'"></BIcon>
  </button>
</template>
<script>
import BIcon from './BIcon.vue';
  export default {
  components: {
    BIcon,
  },
    props:['disabled']
  }
</script>