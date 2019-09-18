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
  ...Actions
};
