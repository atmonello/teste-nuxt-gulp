<template>
  <li class="score--indicator">
    <span class="score--indicator--title">{{ scoreTitle }}</span>
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
  &--title
    text-align: center
    width: 33%

  &--bar
    width: 67%
    height: 30px
    background-color: #fff
    position: relative
    border-radius: 16px
    padding: 4px

    .fill
      display: inline-block
      height: 100%
      background-color: $color-purple
      border-radius: 12px
      transition: width 0.5s ease
</style>

<script>
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
  }
};
</script>
