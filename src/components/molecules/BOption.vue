<template>
  <div class="flex mx-auto w-full cursor-pointer" @click="$emit('change', option.title)">
      <div class="border border-gray-400 bg-white rounded p-4 flex shadow hover:shadow-md  w-full">
        <BIcon class="mr-4 my-auto" :size="26" :icon="option.icon"> </BIcon>
        <div>
          <div class="text-gray-900 font-bold text-xl">
            {{ option.title }}
          </div>
          <div class="text-xs">
            {{ option.text }}
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import BAvatar from "../atoms/BAvatar.vue";
import BIcon from "../atoms/BIcon.vue";
export default {
  components: {
    BIcon,
    BAvatar,
  },
  props: ["option", "choosen"],
  name: "BListItem",
};
</script>