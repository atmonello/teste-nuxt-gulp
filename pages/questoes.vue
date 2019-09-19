<template>
  <div class="page page--questoes">
    <div class="page--questoes--container">
      <section class="page--questoes--wrapper">
        <article>
          <question :question="currentQuestion" />
        </article>
        <button :class="{'button__disabled': !checkSelected }" @click="nextQuestion">
          CONFIRMAR
        </button>
      </section>
      <img src="~assets/img/arte_quiz.webp" alt="Logo">
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page
  &--questoes
    background-image: url('~assets/img/bg3.webp')

    &--container
      height: inherit
      display: flex
      justify-content: center
      align-items: center

      img
        position: absolute
        z-index: 0
        width: 750px
        top: 150px

    &--wrapper
      width: 800px
      background-color: #fff
      color: $color-purple
      border-radius: 16px
      z-index: 1
      position: relative
      padding: 24px 16px

      &::after
        content: ''
        position: absolute
        width: calc(100% + 16px)
        height: calc(100% + 16px)
        top: -8px
        left: -8px
        margin: auto
        border: 1px solid #fff
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
import { mapGetters, mapActions } from 'vuex';
import Question from '../components/question';
export default {
  components: {
    Question
  },
  computed: {
    ...mapGetters({
      questionsList: 'getQuestionsList',
      currentQuestion: 'getCurrentQuestion',
      checkLastQuestion: 'checkLastQuestion',
      checkSelected: 'getSelectedAlternativeStatus'
    }),
    totalQuestions () {
      return this.questionsList.length;
    }
  },
  asyncData ({ store }) {
    const min = 1;
    const max = Math.floor(store.getters.getQuestionsList.length);
    const questionIndex = Math.floor(Math.random() * (max - min + 1) + min);

    store.dispatch('updateCurrentQuestion', questionIndex);

    return {
      questionIndex
    };
  },
  methods: {
    ...mapActions(['updateCurrentQuestion', 'setQuizFinished', 'toggleSelectedAlternative']),
    nextQuestion () {
      if (this.checkLastQuestion) {
        this.setQuizFinished(true);
        this.$router.push('/resultado');
        return;
      }
      const min = 1;
      const max = Math.floor(this.totalQuestions);
      const questionIndex = Math.floor(Math.random() * (max - min + 1) + min);
      this.updateCurrentQuestion(questionIndex - 1);
      this.toggleSelectedAlternative(false);
      this.$nuxt.$emit('resetQuestion');
    }
  },
  validate ({ store, redirect }) {
    if (!store.getters.getQuizStart) {
      redirect('/');
    }
    return true;
  }
};
</script>
