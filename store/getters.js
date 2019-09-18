const Getters = {
  getQuizStart (state) {
    return state.quizStart;
  },
  getScaledSatisfaction (state) {
    const scaled = (state.score.satisfaction / 100) * 100;
    if (scaled > 100) { return 100; }
    return scaled;
  },
  getScaledLoyalty (state) {
    const scaled = (state.score.loyalty / 100) * 100;
    if (scaled > 100) { return 100; }
    return scaled;
  },
  getQuestionsList (state) {
    return state.questionsList;
  },
  getCurrentQuestion (state) {
    return state.currentQuestion;
  },
  getQuizFinished (state) {
    return state.quizFinished;
  },
  checkLastQuestion (state) {
    return state.questionsList.length < 1;
  }
};

export default Getters;
