<template>
  <div class="BOption__wrapper" @click="$emit('set-answer', option)">
    <div class="BOption__card" :class="active ? 'BOption--active' : ''">
      <BIcon class="BOption__icon" :size="iconSize" :icon="option.icon">
      </BIcon>
      <div class="BOption__content">
        <div class="BOption__content-title" v-if="option.title">
          {{ option.title }}
        </div>
        <div class="BOption__content-text" v-if="option.text">
          {{ option.text }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BIcon from "../atoms/BIcon.vue";
export default {
  computed:{
    active(){
      return this.isToggled || this.choosen
    },
  },
  data(){
    return {
      iconSize: 0
    }
  },
  created(){
    this.iconSize = window.screen.width > 640 ? 26 : 32
  },
  components: {
    BIcon,
  },
  props: ["option", "choosen", "isToggled"],
  name: "BListItem",
};
</script>