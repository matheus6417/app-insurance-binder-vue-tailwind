<template>
  <div class="BSummary">
    <div class="BSummary__title">Your Summary</div>
    <div>
      <span class="BSummary__answer">{{ answer("BQuestion-name") }}</span>
      established on
      <span class="BSummary__answer">{{ answer("BQuestion-date") }}</span
      >, and operating out of
      <span class="BSummary__answer">{{ answer("BQuestion-selection") }}</span>
      is interested in purchasing
      <span class="BSummary__answer">{{
        answer("BQuestion-insurancetype").title
      }}</span
      >.
    </div>
    <div v-if="answer('BQuestion-buildingcoverage').title === 'Yes'">
      <br />
      {{ answer("BQuestion-name") }} would also like
      <span class="BSummary__answer">building coverage included</span> in their
      policy.
    </div>
    <div v-if="answer('BQuestion-ownyourdesign').title === 'Yes'">
      <br />
      {{ answer("BQuestion-name") }} does their own
      <span class="BSummary__answer">designs in-house</span>.
    </div>
    <div v-if="answer('BQuestion-phone')">
    <br />
      {{ answer("BQuestion-name") }} can be reached at
      <span class="BSummary__answer">{{ answer("BQuestion-phone") }}</span
      >.
    </div>
  </div>
</template>

<script>
export default {
  name: "BSummary",
  methods: {
    answer(questionID) {
      return this.$store.state.appCustomData.componentsLibrary[questionID].props
        .answer;
    },
  },
};
</script>