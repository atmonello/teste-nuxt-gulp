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
  },
  getQuestionID (state) {
    const min = 1;
    const max = state.questionsList.length;

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

export default Getters;
