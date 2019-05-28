import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    loggedIn: false,
    books: [],
    targetBook: {
      id: null,
      title: '',
      itemUrl: '',
      imageUrl: '',
      description: '',
      completedYear: '',
      completedMonth: '',
    },
    doneMessage: '',
    errorMessage: '',
  },
  getters: {
    completedDate: state => Object.keys(state.books),
  },
  mutations: {
    invalidate(state, payload) {
      state.errorMessage = payload.message;
    },
    clearMessage(state) {
      state.errorMessage = '';
      state.doneMessage = '';
    },
    resetForm(state) {
      Object.assign(state.targetBook, {
        id: null,
        title: '',
        itemUrl: '',
        imageUrl: '',
        description: '',
        completedYear: '',
        completedMonth: '',
      });
    },
    updateValue(state, { value, name }) {
      state.targetBook[name] = value;
    },
    failRequest(state, { message }) {
      state.errorMessage = message;
    },
    doneGetAllBooks(state, payload) {
      state.books = payload;
    },
    doneGetBook(state, payload) {
      Object.assign(state.targetBook, payload);
    },
    doneAddBook(state) {
      state.doneMessage = '新しい本を追加しました';
    },
    doneEditBook(state, payload) {
      state.doneMessage = '本の情報を更新しました';
      Object.assign(state.targetBook, payload);
    },
  },
  actions: {
    invalidate({ commit }, message) {
      commit('invalidate', { message });
    },
    clearMessage({ commit }) {
      commit('clearMessage');
    },
    resetForm({ commit }) {
      commit('resetForm');
    },
    updateValue({ commit }, input) {
      commit('updateValue', input);
    },
    getAllBooks({ commit }) {
      axios.get('/api/books').then(({ data }) => {
        commit('doneGetAllBooks', data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
    getBook({ commit }, { id }) {
      axios.get(`/api/books/${id}`).then(({ data }) => {
        commit('doneGetBook', data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
    addBook({ commit }, book) {
      axios.post('/api/books', book).then(({ data }) => {
        commit('doneAddBook', data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
    editBook({ commit }, book) {
      axios.patch(`/api/books/${book.id}`, book).then(({ data }) => {
        commit('doneEditBook', data);
        console.log(data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
  },
});
