<template>
  <div class="score score--wrapper" :class="{'score--wrapper__vertical': isVertical}">
    <img class="score--wrapper--image" src="~assets/img/arte_indicadores.png" alt="">
    <div class="score--wrapper--list">
      <ul>
        <indicator :score-title="'Satisfação do Cliente'" :score-value="!isVertical ? satisfaction : 50" />
        <indicator :score-title="'Fidelização'" :score-value="!isVertical ? loyalty : 50" />
      </ul>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.score

  &--wrapper
    display: flex
    align-items: center

    &__vertical
      flex-direction: column
      justify-content: center

      .score--wrapper--image
        filter: saturate(0) invert(100) hue-rotate(45deg)

      .score--wrapper--list
        background-color: $color-red__light
        margin: 8px

    &--image
      height: 120px

    &--list
      width: 320px
      background-color: $color-red
      border-radius: 16px
      margin: 0 8px
      padding: 8px

      ul
        list-style: none
        margin: 0
        padding: 0
</style>

<script>
import { mapGetters } from 'vuex';
import Indicator from './indicator';

export default {
  components: {
    Indicator
  },
  props: {
    isVertical: {
      required: false,
      type: Boolean
    }
  },
  computed: {
    ...mapGetters({
      loyalty: 'getScaledLoyalty',
      satisfaction: 'getScaledSatisfaction'
    })
  }
};
</script>
