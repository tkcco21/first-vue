import axios from '@Common/axiosDefault';

export default {
  namespaced: true,
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
      axios.post('/admin/signin', adminUser).then(({ data }) => {
        commit('successSignin', { token: data.token });
      }).catch((err) => {
        commit('failSignin', { message: err.response.data.message });
      });
    },
    checkToken({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('/admin/token').then(({ data }) => {
          resolve();
          commit('successSignin', { token: data.token });
        }).catch(() => {
          reject();
          commit('failCheckToken');
        });
      });
    },
  },
};
