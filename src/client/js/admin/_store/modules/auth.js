import axios from 'axios';

export default {
  state: {
    username: '',
    password: '',
    errorMessage: '',
  },
  getters: {},
  mutations: {
    clearMessage(state) {
      state.errorMessage = '';
    },
    successSignin() {
      console.log('successSignin');
    },
    failSignin(state, { message }) {
      state.errorMessage = message;
    },
  },
  actions: {
    clearMessage({ commit }) {
      commit('clearMessage');
    },
    signin({ commit }, adminUser) {
      axios.post('/api/admin/signin', adminUser).then((data) => {
        console.log('data - ', data);
        commit('successSignin');
      }).catch((err) => {
        commit('failSignin', { message: err.response.data.message });
      });
    },
  },
};
