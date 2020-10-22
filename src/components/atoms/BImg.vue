<template>
  <img :src="src" />
</template>

<script>
export default {
  props: ["src"],
  name: "BImg",
};
</script>