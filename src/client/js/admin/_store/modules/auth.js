import axios from 'axios';

export default {
  state: {
    token: '',
    loading: false,
    errorMessage: '',
  },
  getters: {},
  mutations: {
    applySignin(state) {
      state.loading = true;
    },
    clearMessage(state) {
      state.errorMessage = '';
    },
    successSignin(state, { token }) {
      state.token = token;
      state.loading = false;
    },
    failSignin(state, { message }) {
      state.errorMessage = message;
      state.loading = false;
    },
    failCheckToken(state) {
      state.token = '';
      state.loading = false;
    },
  },
  actions: {
    clearMessage({ commit }) {
      commit('clearMessage');
    },
    applySignin({ commit }) {
      commit('applySignin');
    },
    signin({ commit }, adminUser) {
      axios.post('/api/admin/signin', adminUser).then(({ data }) => {
        commit('successSignin', { token: data.token });
      }).catch((err) => {
        commit('failSignin', { message: err.response.data.message });
      });
    },
    checkToken({ commit }) {
      axios.get('/api/admin/token').then(({ data }) => {
        commit('successSignin', { token: data.token });
      }).catch(() => {
        commit('failCheckToken');
      });
    },
  },
};
