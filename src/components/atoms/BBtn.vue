<template>
  <button
    class="hover:opacity-75 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-md w-full md:max-w-xs mx-6"
    :style="{
      backgroundColor:
        $store.state.appCustomData.globalProps.colors[
          $attrs.color ? $attrs.color : 'primary_default'
        ].color,
    }"
    @click="clickAction(action)"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  props: ["text", "action"],
  name: "BBtn",
  methods: {
    clickAction(action) {
      if (action.includes("http")) {
        Object.assign(document.createElement("a"), {
          target: "_blank",
          href: action,
        }).click();
      } else {
        this.$store.commit("changeStep", action);
      }
    },
  },
};
</script>