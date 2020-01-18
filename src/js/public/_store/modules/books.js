import axios from '@Common/axiosDefault';

export default {
  namespaced: true,
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
      commit('generics/startLoading', null, { root: true });
      axios.get('/books').then(({ data }) => {
        commit('doneGetAllBooks', { bookList: data });
        commit('generics/finishLoading', null, { root: true });
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
        commit('generics/finishLoading', null, { root: true });
      });
    },
    getBook({ commit }, { id }) {
      commit('generics/startLoading', null, { root: true });
      axios.get(`/books/${id}`).then(({ data }) => {
        commit('doneGetBook', { book: data });
        commit('generics/finishLoading', null, { root: true });
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
        commit('generics/finishLoading', null, { root: true });
      });
    },
  },
};
