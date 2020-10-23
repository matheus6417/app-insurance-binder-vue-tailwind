<template>
  <div
    class="flex mx-auto w-full cursor-pointer min-h-20"
    @click="$emit('setAnswer', option.title)"
  >
    <div
      class="bg-white rounded p-4 flex shadow hover:shadow-md w-full"
      :class="choosen ? 'border-blue-500 border-2' : 'border-2 border-gray-400'"
    >
      <BIcon class="mr-4 my-auto" :size="26" :icon="option.icon"> </BIcon>
      <div class="my-auto">
        <div class="text-gray-900 font-bold text-xl" v-if="option.title">
          {{ option.title }}
        </div>
        <div class="text-xs" v-if="option.text">
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