const Actions = {
  setQuizStart ({ commit }, data) {
    commit('setQuizStart', data);
  },
  setQuestionsList ({ commit }, data) {
    commit('setQuestionsList', data);
  },
  updateLoyalty ({ commit }, data) {
    commit('updateLoyalty', data);
  },
  updateSatisfaction ({ commit }, data) {
    commit('updateSatisfaction', data);
  },
  updateCurrentQuestion ({ commit }, data) {
    commit('updateCurrentQuestion', data);
    commit('removeQuestionFromList', data);
  },
  setQuizFinished ({ commit }, data) {
    commit('setQuizFinished', data);
  }
};

export default Actions;
