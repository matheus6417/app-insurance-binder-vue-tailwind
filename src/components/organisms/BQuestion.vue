<template>
  <div class="mb-8 mx-auto w-full md:max-w-lg px-6 text-3x1">
    <BListItem
      :item="{
        text: $attrs.text,
        icon: $attrs.icon,
      }"
    ></BListItem>
    <template v-if="$attrs.type === 'options'">
      <BOption
        v-for="(option, i) in $attrs.options"
        :key="i"
        :option="option"
      ></BOption>
    </template>
  </div>
</template>

<script>
import BListItem from "../molecules/BListItem.vue";
import BOption from "../molecules/BOption.vue";
export default {
  components: {
    BOption,
    BListItem,
  },
  name: "BQuestion",
};
</script>