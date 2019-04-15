import axios from 'axios';

export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    counter: 0, // サンプル
    sample: '', // サンプル
    loggedIn: false,
    books: [],
    redirectUrl: '',
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
    getBooks(state, payload) {
      console.log(payload);
    },
  },
  actions: {
    increments({ commit }) {
      commit('increments');
    },
    updateValue({ commit }, value) {
      commit('updateValue', value);
    },
    getBooks({ commit }) {
      axios.get('/api/books').then((data) => {
        commit('getBooks', data);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
};
