<template>
  <div class="BFormErrors" v-if="errors && errors.length">
    <ul>
      <span v-for="(error, i) in errors" :key="i">
        {{ error }}
      </span>
    </ul>
  </div>
</template>

<script>
  export default {
    props:['errors']
  }
</script>