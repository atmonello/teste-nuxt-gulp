<template>
  <div class="page page--resultado" :style="{ backgroundImage: 'url(' + this.$imageURL('bg4') + ')'}">
    <div class="page--resultado--container">
      <section class="page--resultado--wrapper">
        <div class="page--resultado--title">
          <img :src="this.$imageURL('arte_indicadores')" alt="Logo">
          <h2>Veja sua <em>performance</em> em cada indicador:</h2>
        </div>
        <div class="page--resultado--score">
          <score :final-result="true" />
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page
  &--resultado
    display: flex
    align-items: center
    justify-content: center

    &::before
      content: ''
      position: fixed
      top: 0
      left: 0
      width: 100vw
      height: 100vh
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))
    &--wrapper
      background-color: $color-red
      border-radius: 10px
      color: #fff
      padding: 24px
      z-index: 0
      width: 640px
      position: relative

      &::after
        content: ''
        position: absolute
        width: calc(100% + 20px)
        height: calc(100% + 20px)
        top: -10px
        left: -10px
        border-radius: 10px
        border: 1px solid $color-red
        z-index: -1

    &--title
      display: flex
      justify-content: center
      align-items: center

      img
        height: 150px
        margin-right: 20px
        filter: saturate(0) invert(100) hue-rotate(45deg)

      h2
        font-weight: bold
        flex-basis: 60%

    &--score
      margin: auto
      width: 50%

</style>

<script>
import Score from '../components/score';

export default {
  head: {
    title: 'Resultado - André Monello'
  },
  validate ({ store, redirect }) {
    if (!store.getters.getQuizFinished) {
      redirect('/');
    }
    return true;
  },
  components: {
    Score
  }
};
</script>
