<template>
  <div class="w-full md:max-w-2xl mx-auto my-16">
    <div class="text-bold text-xl mb-6">Your Summary</div>
    <div>
      {{ answer("BQuestion-name") }} is interested in purchasing
      {{ answer("BQuestion-insurancetype") }}
    </div>
    <div v-if="answer('BQuestion-buildingcoverage') === 'Yes'">
      {{ answer("BQuestion-name") }} would also like building coverage included
      in their policy.
    </div>
    <div v-if="answer('BQuestion-ownyourdesign') === 'Yes'">{{answer('BQuestion-name')}} does their own designs in-house.</div>
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