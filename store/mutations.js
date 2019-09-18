const Mutations = {
  setQuizStart (state, data) {
    state.quizStart = data;
  },
  setQuestionsList (state, data) {
    state.questionsList = data;
  },
  updateLoyalty (state, data) {
    state.score.loyalty += data;
  },
  updateSatisfaction (state, data) {
    state.score.satisfaction += data;
  }
};

export default Mutations;
