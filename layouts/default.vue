<template>
  <main>
    <nuxt />
    <aside v-if="getQuizStart && !getQuizFinished" class="main--score">
      <Score />
    </aside>
  </main>
</template>

<style lang="sass" scoped>
main
  height: 100vh

  .main--score
    position: fixed
    top: 0
    right: 0
    z-index: 5
    padding: 1.5rem
</style>

<script>
import { mapGetters } from "vuex";
import Score from "../components/score";

export default {
  components: {
    Score
  },
  computed: {
    ...mapGetters(["getQuizStart", "getQuizFinished"])
  }
};
</script>
