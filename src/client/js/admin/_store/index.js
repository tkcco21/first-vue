import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
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
    addBook() {
      console.log('add');
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
    addBook({ commit }, book) {
      console.log(book);
      axios.post('/api/books', book).then(() => {
        commit('addBook');
      }).catch((err) => {
        console.log(err);
      });
    },
  },
});
