<template>
  <div class="page page--intro">
    <div class="page--intro__container">
      <h1>Game Quiz</h1>
      <p>Seja bem-vindo(a)! A partir de agora, você terá a oportunidade de colocar em prática tudo o que já aprendeu. Para isso, será necessário superar alguns desafios, tomando a <strong>melhor decisão para você, para o cliente e para o negócio.</strong> Está preparado?</p>
      <button @click="startQuiz">
        Clique aqui para aceitar o desafio!
      </button>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page
  &--intro
    background-color: wheat
    padding: 2rem 5rem

    &__container
      height: inherit
      display: flex
      flex-direction: column
      justify-content: center
      color: #fff
      width: 400px

      p, h1
        color: $color-purple

      h1
        font-weight: bolder

      p
        font-size: 1.25rem

      button
        background-image: linear-gradient(45deg, $color-red, $color-purple)
        border: none
        border-radius: 8px
        color: #fff
        padding: 8px
        font-weight: bold
        font-size: 1.33rem
        box-shadow: 0 0 30px -15px $color-red
        transition: all 0.1s ease-out

        &:hover
          transform: scale(1.025)
          padding: 8px 20px
          transition: all 0.15s ease-in
</style>

<script>
import { mapActions } from 'vuex';

export default {
  asyncData ({ store, redirect }) {
    const isStarted = store.getters.getQuizStart;
    if (isStarted) {
      redirect('/instrucoes');
    }
  },
  head: {
    title: 'André Monello'
  },
  methods: {
    ...mapActions({
      setQuizStart: 'setQuizStart'
    }),
    startQuiz () {
      this.setQuizStart(true);
      this.$router.push('/instrucoes');
    }
  }
};
</script>
