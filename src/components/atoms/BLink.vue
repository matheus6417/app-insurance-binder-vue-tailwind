<template>
  <div class="BLink" @click="$router.go()">
    <BIcon :icon="$attrs.icon"></BIcon>
    <span>
      {{ $attrs.text }}
    </span>
  </div>
</template>

<script>
import BIcon from './BIcon.vue';
  export default {
  components: {
    BIcon,
  },
  name: "BLink",
    
  }
</script>