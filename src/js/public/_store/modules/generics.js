export default {
  namespaced: true,
  state: {
    isLoading: false, // TODO: すべての非同期処理にこいつ入れたい
    // doneMessage: '', // TODO: Booksモジュールに入っているのをこっちにしたい
    // errorMessage: '', // TODO: Booksモジュールに入っているのをこっちにしたい
  },
  getters: {},
  mutations: {
    startLoading(state) {
      state.isLoading = true;
    },
    finishLoading(state) {
      state.isLoading = false;
    },
  },
};
