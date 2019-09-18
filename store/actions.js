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
  }
};

export default Actions;
