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
  },
  updateCurrentQuestion (state, data) {
    state.currentQuestion = state.questionsList[data];
  },
  removeQuestionFromList (state, data) {
    state.questionsList.splice(data, 1);
  }
};

export default Mutations;
