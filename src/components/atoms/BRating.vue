<template>
  <div class="BRating__wrapper">
    <div v-for="(item, index) in Math.floor(rating)" :key="index">
      <svg
       :width="iconSize"
        :height="iconSize"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
          fill="#0074D9"
        />
      </svg>
    </div>
    <div v-if="5 - rating - Math.floor(5 - rating) > 0">
      <svg
        :width="iconSize"
        :height="iconSize"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
          fill="#C4C4C4"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11 0L8.5303 7.60081H0.53833L7.00397 12.2984L4.53431 19.8992L11 15.2016V0Z"
          fill="#0074D9"
        />
      </svg>
    </div>
    <div v-for="(item, index) in Math.floor(5 - rating)" :key="index">
      <svg
        :width="iconSize"
        :height="iconSize"
        viewBox="0 0 22 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11 0L13.4697 7.60081H21.4616L14.996 12.2984L17.4656 19.8992L11 15.2016L4.53436 19.8992L7.00402 12.2984L0.538379 7.60081H8.53035L11 0Z"
          fill="#C4C4C4"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import BIcon from './BIcon.vue';
  export default {
     created(){
    this.iconSize = window.screen.width > 640 ? 18 : 22
  },
  data(){
    return {
      iconSize: 0
    }
  },
  components: {
    BIcon,
  },
    props:['rating']
  }
</script>