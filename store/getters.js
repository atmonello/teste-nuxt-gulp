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
  }
};

export default Getters;
