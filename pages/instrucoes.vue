<template>
  <div class="page page--instrucoes">
    <div class="page--instrucoes__container">
      <section class="page--instrucoes__wrapper">
        <h1>Game Quiz</h1>
        <p>Seja bem-vindo(a)! A partir de agora, você terá a oportunidade de colocar em prática tudo o que já aprendeu. Para isso, será necessário superar alguns desafios, tomando a <strong>melhor decisão para você, para o cliente e para o negócio.</strong> Está preparado?</p>
        <button>
          CONTINUAR
        </button>
      </section>
    </div>
  </div>
</template>

<style lang="sass" scoped>
.page
  &--instrucoes
    background-color: wheat
    padding: 2rem 5rem
    position: relative

    &__container
      height: inherit
      display: flex
      flex-direction: column
      justify-content: center
      color: #fff
      width: 600px

    &__wrapper
      background-color: $color-red
      padding: 32px 20px
      border-radius: 16px
      position: relative

      &::after
        position: absolute
        content: ''
        width: calc(100% + 16px)
        height: calc(100% + 16px)
        top: -8px
        left: -8px
        border: 1px solid $color-red
        border-radius: 16px

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

        &:hover
          padding: 8px 20px

</style>

<script>
export default {
  head: {
    title: 'Instruções'
  }
};
</script>
