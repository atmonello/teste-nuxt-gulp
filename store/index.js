import Mutations from './mutations';
import Actions from './actions';
import Getters from './getters';
import State from './state';

export const state = () => ({
  ...State
});

export const mutations = {
  ...Mutations
};

export const getters = {
  ...Getters
};

export const actions = {
  ...Actions,
  async nuxtServerInit ({ dispatch }, { $axios }) {
    await $axios.get('/questions.json')
      .then((response) => {
        const shuffle = response.data
          .map(a => ({ sort: Math.random(), value: a }))
          .sort((a, b) => a.sort - b.sort)
          .map(a => a.value);
        dispatch('setQuestionsList', shuffle.slice(0, 10));
      });
  }
};
