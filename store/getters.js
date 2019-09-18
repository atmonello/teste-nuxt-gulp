const Getters = {
  getQuizStart (state) {
    return state.quizStart;
  },
  getScaledSatisfaction (state) {
    return (state.score.satisfaction / 100) * 100;
  },
  getScaledLoyalty (state) {
    return (state.score.loyalty / 100) * 100;
  },
  getQuestionsList (state) {
    return state.questionsList;
  }
};

export default Getters;
