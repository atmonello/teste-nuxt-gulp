<template>
  <div class="question question--wrapper">
    <p class="question--wrapper--text">
      {{ question.text }}
    </p>
    <ol class="question--wrapper--alternatives">
      <li v-for="(alt, index) in question.alternatives" :key="index" :class="{selected: index === selectedAlternative, inactive: selectedAlternative !== null}" @click="selectAlternative($event, index)">
        {{ alt.text }}
      </li>
    </ol>
  </div>
</template>

<style lang="sass" scoped>
.question
  &--wrapper
    font-weight: 500

    &--text, &--alternatives
      font-size: 1.33rem

    &--alternatives
      counter-reset: item

      li
        display: block
        margin-bottom: 1rem
        cursor: pointer

        &::before
          content: counter(item, upper-alpha) "  "
          counter-increment: item
          display: inline-block
          width: 24px
          text-align: center
          border: 1px solid $color-purple
          border-radius: 8px
          font-weight: bolder
          font-size: 16px
          vertical-align: text-top
          margin-right: 8px

        &.selected
          &::before
            background-color: $color-purple
            color: #fff

        &.inactive
          pointer-events: none

          &:not(.selected)
            opacity: 0.5
</style>

<script>
export default {
  props: {
    question: {
      required: true,
      type: Object
    }
  },
  data () {
    return {
      selectedAlternative: null
    };
  },
  methods: {
    selectAlternative (evt, index) {
      console.log('SELECT ALTERNATIVE', { evt, index });
      this.selectedAlternative = index;
    }
  }
};
</script>
