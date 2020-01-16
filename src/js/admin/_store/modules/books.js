import axios from '@Common/axiosDefault';

export default {
  namespaced: true,
  state: {
    loggedIn: false,
    bookList: [],
    targetBook: {
      id: null,
      title: '',
      itemUrl: '',
      imageUrl: '',
      description: '',
      completedYear: null,
      completedMonth: null,
    },
    doneMessage: '',
    errorMessage: '',
  },
  getters: {
    completedDate: state => Object.keys(state.bookList),
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
      state.targetBook = Object.assign({}, {
        id: null,
        title: '',
        itemUrl: '',
        imageUrl: '',
        description: '',
        completedYear: null,
        completedMonth: null,
      });
    },
    updateValue(state, { value, name }) {
      state.targetBook[name] = value;
    },
    failRequest(state, { message }) {
      state.errorMessage = message;
    },
    doneGetAllBooks(state, { bookList }) {
      state.bookList = bookList;
    },
    doneGetBook(state, payload) {
      state.targetBook = Object.assign({}, payload);
    },
    doneAddBook(state) {
      state.doneMessage = '新しい本を追加しました';
    },
    doneEditBook(state, payload) {
      state.doneMessage = '本の情報を更新しました';
      state.targetBook = Object.assign({}, payload);
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
      axios.get('/books').then(({ data }) => {
        commit('doneGetAllBooks', { bookList: data });
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
    getBook({ commit }, { id }) {
      axios.get(`/books/${id}`).then(({ data }) => {
        commit('doneGetBook', data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
    addBook({ rootState, commit }, book) {
      axios({
        headers: { Authorization: `Bearer ${rootState.auth.token}` },
        method: 'POST',
        url: '/books',
        data: book,
      }).then(({ data }) => {
        commit('doneAddBook', data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
    editBook({ rootState, commit }, book) {
      axios({
        headers: { Authorization: `Bearer ${rootState.auth.token}` },
        method: 'PATCH',
        url: `/books/${book.id}`,
        data: book,
      }).then(({ data }) => {
        commit('doneEditBook', data);
      }).catch((err) => {
        commit('failRequest', { message: err.response.data.message });
      });
    },
  },
};
