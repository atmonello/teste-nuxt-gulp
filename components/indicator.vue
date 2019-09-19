<template>
  <li class="score--indicator">
    <span class="score--indicator--title" :class="{'score--indicator--title__final': getQuizFinished}">{{ scoreTitle }}</span>
    <span class="score--indicator--bar">
      <span class="fill" :style="{ width: scoreValue + '%'}" />
    </span>
  </li>
</template>

<style lang="sass" scoped>
.score--indicator
  display: inline-flex
  width: 100%
  align-items: center
  flex-wrap: nowrap
  margin: 5px 0
  color: #fff

  &--title
    text-align: center
    width: 33%
    margin-right: 10px

    &__final
      font-weight: bold

  &--bar
    width: 67%
    height: 30px
    background-color: #fff
    position: relative
    border-radius: 16px
    padding: 4px
    margin-bottom: 5px

    .fill
      display: inline-block
      height: 100%
      background-color: $color-purple
      border-radius: 12px
      transition: width 0.5s ease
</style>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    scoreTitle: {
      required: true,
      type: String
    },
    scoreValue: {
      required: true,
      type: Number
    }
  },
  computed: {
    ...mapGetters(['getQuizFinished'])
  }
};
</script>
