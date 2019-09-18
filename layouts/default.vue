<template>
  <main>
    <nuxt />
  </main>
</template>

<style lang="sass" scoped>
main
  height: 100vh
</style>

<script>
import { mapActions } from 'vuex';
export default {
  beforeCreate () {
    this.$axios.get('/questions.json')
      .then((response) => {
        this.setQuestionsList(response.data);
      });
  },
  methods: {
    ...mapActions({
      setQuestionsList: 'setQuestionsList'
    })
  }
};
</script>
