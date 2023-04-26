const profile = {
  namespaced: true,
  state() {
    return {
      username: "",
    };
  },
  getters: {
    username: (state) => state.username,
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
    },
  },
};

export default profile;
