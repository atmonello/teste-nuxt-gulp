<template>
  <div class="page page--questoes">
    <div class="page--questoes__container">
      <section class="page--questoes__wrapper">
        <article>
          <question :question="currentQuestion" />
        </article>
        <button>CONFIRMAR</button>
      </section>
      <img src="~assets/img/arte_quiz.png" alt="">
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page
  &--questoes
    background-color: wheat
    padding: 2rem 5rem
    position: relative

    &__container
      height: inherit
      display: flex
      justify-content: center
      align-items: center

      img
        position: absolute
        z-index: 0
        width: 750px
        top: 150px
        animation-name: rotate-img
        animation-duration: 120s
        animation-timing-function: linear
        animation-fill-mode: forwards
        animation-iteration-count: infinite

    &__wrapper
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

        &:hover
          padding: 8px 20px

@keyframes rotate-img
  0%
    transform: rotateZ(0deg)
  100%
    transform: rotateZ(360deg)
</style>

<script>
import { mapGetters } from 'vuex';
import Question from '../components/question';
export default {
  components: {
    Question
  },
  computed: {
    ...mapGetters({
      questionsList: 'getQuestionsList'
    }),
    currentQuestion () {
      return this.questionsList.filter(question => question.id === this.questionID)[0];
    }
  },
  asyncData ({ store }) {
    const min = 1;
    const max = Math.floor(store.getters.getQuestionsList.length);
    const questionID = Math.floor(Math.random() * (max - min + 1) + min);

    return {
      questionID
    };
  }
};
</script>
