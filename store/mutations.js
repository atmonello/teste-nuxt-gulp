const Mutations = {
  setQuizStart(state, data) {
    state.quizStart = data;
  },
  setQuestionsList(state, data) {
    state.questionsList = data;
  },
  updateLoyalty(state, data) {
    state.score.loyalty += data;
  },
  updateSatisfaction(state, data) {
    state.score.satisfaction += data;
  },
  updateCurrentQuestion(state, data) {
    state.currentQuestion = state.questionsList[data];
  },
  removeQuestionFromList(state, data) {
    state.questionsList.splice(data, 1);
  },
  setQuizFinished(state, data) {
    state.quizFinished = data;
  },
  toggleSelectedAlternative(state, data) {
    state.hasSelectedAlternative = data;
  }
};

export default Mutations;
