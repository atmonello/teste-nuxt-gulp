<template>
  <div class="page page--intro" :style="{ backgroundImage: 'url(' + this.$imageURL('bg1') + ')'}">
    <div class="page--intro--container">
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

    &--container
      height: inherit
      display: flex
      flex-direction: column
      justify-content: center
      color: #fff
      width: 400px

      p, h1
        color: $color-purple

      p
        font-size: 1.25rem

      button
        background-image: $gradient-button
        border: none
        border-radius: 8px
        color: #fff
        padding: 8px
        font-weight: bold
        font-size: 1.33rem
        box-shadow: 0 0 30px -15px $color-red
</style>

<script>
import { mapActions } from 'vuex';
import Questions from '~/static/questions.json';

export default {
  head: {
    title: 'Quiz - André Monello'
  },
  async asyncData ({ store }) {
    const shuffle = Questions
      .map(a => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value);
    await store.dispatch('setQuestionsList', shuffle.slice(0, 10));
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
