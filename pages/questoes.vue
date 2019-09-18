<template>
  <div class="page page--questions">
    <h1>Questões</h1>
    <p>ID: {{ questionID }}</p>
  </div>
</template>

<script>
export default {
  asyncData ({ store }) {
    const questionID = store.getters.getQuestionID;
    return { questionID };
  }
};
</script>
