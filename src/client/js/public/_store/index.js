import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    bookList: [],
    book: {
      id: null,
      title: null,
      itemUrl: null,
      imageUrl: null,
      description: null,
      completedYear: null,
      completedMonth: null,
    },
    errorMessage: '',
  },
  getters: {
    yearlyNumberOfBooks: (state) => {
      const yearlyNumberOfBooks = state.bookList.reduce((acc, value) => {
        let num = 0;
        value[Object.keys(value)[0]].forEach((item) => {
          num += item[Object.keys(item)].count;
        });
        return Object.assign({}, acc, { [Object.keys(value)[0]]: num });
      }, {});
      return yearlyNumberOfBooks;
    },
  },
  mutations: {
    failRequest(state, { message }) {
      state.errorMessage = message;
    },
    doneGetAllBooks(state, { bookList }) {
      state.bookList = bookList;
    },
    doneGetBook(state, { book }) {
      state.book = Object.assign({}, book);
    },
  },
  actions: {
    getAllBooks({ commit }) {
      axios.get('/api/books').then(({ data }) => {
        commit('doneGetAllBooks', { bookList: data });
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
    getBook({ commit }, { id }) {
      axios.get(`/api/books/${id}`).then(({ data }) => {
        commit('doneGetBook', { book: data });
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
  },
});
