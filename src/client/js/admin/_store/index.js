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
    doneGetBooks(state, payload) {
      state.books = payload;
    },
    failGetBooks(state) {
      state.errorMessage = '本の情報を取得できませんでした。';
    },
    addBook() {
      console.log('add');
    },
  },
  actions: {
    getBooks({ commit }) {
      axios.get('/api/books').then(({ data }) => {
        commit('doneGetBooks', data);
      }).catch((err) => {
        commit('failGetBooks', err.response.data.message);
      });
    },
    addBook({ commit }, book) {
      console.log(book);
      axios.post('/api/books', book);
      // axios.post('/api/books', book).then(() => {
      commit('addBook');
      // }).catch((err) => {
      //   console.log(err);
      // });
    },
  },
});
