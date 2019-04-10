export default {
  strict: process.env.NODE_ENV !== 'production',
  state: {
    counter: 0,
  },
  getters: {
    doubleCounter: state => state.counter * 2,
  },
  mutations: {
    increments(state) {
      console.log('test');
      state.counter += 1;
    },
  },
  actions: {
    increments({ commit }) {
      commit('increments');
    },
  },
};
