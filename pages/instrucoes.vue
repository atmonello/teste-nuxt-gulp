<template>
  <div
    :style="{ backgroundImage: 'url(' + this.$imageURL('bg2') + ')' }"
    class="page page--instrucoes"
  >
    <div class="page--instrucoes--container">
      <section class="page--instrucoes--wrapper">
        <article>
          <p>
            Ao lado, estão os três indicadores do <em>game</em>. Quando você
            tomar suas decisões, eles poderão aumentar ou diminuir. Por isso,
            acompanhe-os para saber sua evolução no jogo.
          </p>
          <p>
            Você iniciará o <em>game</em> com os indicadores zerados. No
            decorrer do jogo, eles serão impactados por todas as suas decisões.
            Então, fique atento!
          </p>
          <p>
            Antes de resolver cada situação, reflita como suas escolhas podem
            influenciar os indicadores.
          </p>
        </article>
        <Score :is-vertical="true" />
        <button @click="startQuestions">
          CONTINUAR
        </button>
      </section>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page
  &--instrucoes
    &--container
      height: inherit
      display: flex
      flex-direction: column
      justify-content: center
      color: #fff
      width: 800px

    &--wrapper
      background-color: $color-red
      padding: 32px 20px
      border-radius: 16px
      position: relative
      display: flex
      align-items: center
      z-index: 0

      &::after
        position: absolute
        content: ''
        width: calc(100% + 16px)
        height: calc(100% + 16px)
        top: -8px
        left: -8px
        border: 1px solid $color-red
        border-radius: 16px
        z-index: -1

      button
        background-image: $gradient-button
        border: 1px solid #bbb
        border-radius: 8px
        color: #fff
        padding: 8px
        font-weight: bold
        font-size: 1.33rem
        box-shadow: 0 0 30px -15px $color-red
        z-index: 1
        position: absolute
        bottom: -32px
        left: 0
        right: 0
        margin: auto
        width: 160px
</style>

<script>
import Score from "../components/score";
export default {
  components: {
    Score
  },
  validate({ store, redirect }) {
    if (!store.getters.getQuizStart) {
      redirect("/");
    }
    return true;
  },
  head: {
    title: "Instruções - André Monello"
  },
  methods: {
    startQuestions() {
      this.$router.push("/questoes");
    }
  }
};
</script>
