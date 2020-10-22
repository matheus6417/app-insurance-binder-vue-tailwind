<template>
  <div class="flex justify-items-center content-center justify-center mb-6">
    <BBtn
      v-for="(btn, i) in $attrs.buttons"
      :key="i"
      :text="btn.text"
      :action="btn.action"
      v-bind="$attrs"
    ></BBtn>
  </div>
</template>

<script>
import BBtn from "../atoms/BBtn.vue";
export default {
  components: {
    BBtn,
  },
  name: "BButtons",
};
</script>