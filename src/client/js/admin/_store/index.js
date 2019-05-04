import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    loggedIn: false,
    books: [],
    errorMessage: '',
  },
  getters: {
    completedDate: state => Object.keys(state.books),
  },
  mutations: {
    failRequest(state, { message }) {
      state.errorMessage = message;
    },
    doneGetBooks(state, payload) {
      state.books = payload;
    },
    addBook(state, payload) {
      console.log(payload);
      console.log('add');
    },
  },
  actions: {
    getBooks({ commit }) {
      axios.get('/api/books').then(({ data }) => {
        commit('doneGetBooks', data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
    addBook({ commit }, book) {
      axios.post('/api/books', book).then(({ data }) => {
        commit('addBook', data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
  },
});
