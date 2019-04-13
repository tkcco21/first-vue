import axios from 'axios';

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    counter: 0,
    sample: '',
  },
  getters: {
    doubleCounter: state => state.counter * 2,
  },
  mutations: {
    increments(state) {
      state.counter += 1;
    },
    updateValue(state, value) {
      state.sample = value;
    },
    submitSample() {},
  },
  actions: {
    increments({ commit }) {
      commit('increments');
    },
    updateValue({ commit }, value) {
      commit('updateValue', value);
    },
    submitSample() {
      axios.get('/api/books');
    },
  },
};
