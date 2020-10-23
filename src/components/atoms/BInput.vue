<template>
  <div>
    <div class="flex items-center border-b-2 border-grey-600 py-2 mb-6">
      <input
        class="appearance-none bg-transparent border-none w-full text-blue-600 mr-3 py-1 px-2 leading-tight focus:outline-none"
        type="text"
        v-model="inputData"
      />
    </div>
    <button
      class="flex hover:opacity-75 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow-md"
      :style="{
        backgroundColor:
          $store.state.appCustomData.globalProps.colors[
            $attrs.color ? $attrs.color : 'secondary_default'
          ].color,
      }"
      :class="inputData ? 'bg-white' : 'opacity-50 cursor-not-allowed'"
      :disable="!inputData"
      @click.once="inputData ? $emit('change', inputData) : void 0"
    >
      <span
        class="mr-2"
        :style="{
          color:
            $store.state.appCustomData.globalProps.colors[
              $attrs.color ? $attrs.color : 'blue_default'
            ].color,
        }"
        >OK</span
      >
      <BIcon :icon="'check'" :color="'blue_default'"></BIcon>
    </button>
  </div>
</template>

<script>
import BIcon from "./BIcon.vue";
export default {
  components: {
    BIcon,
  },
  name: "BInput",
  data() {
    return {
      inputData: "",
    };
  },
};
</script>