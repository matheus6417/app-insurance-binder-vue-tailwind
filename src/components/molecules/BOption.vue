<template>
  <div class="flex mb-5 mx-auto">
    <div class="w-full">
      <div
        class="border border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded p-4 flex shadow"
      >
        <BIcon class="mr-4" :size="'8'" :icon="option.icon"> </BIcon>
        <div>
          <div class="text-gray-900 font-bold text-xl">
            {{ option.title }}
          </div>
          <div>
            {{ option.text }}
          </div>
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
  props: ["option"],
  name: "BListItem",
};
</script>