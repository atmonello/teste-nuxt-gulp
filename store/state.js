const State = () => {
  return {
    quizStart: false,
    questionsList: [],
    currentQuestion: {},
    quizFinished: false,
    hasSelectedAlternative: false,
    score: {
      loyalty: 0,
      satisfaction: 0
    }
  };
};

export default State;
