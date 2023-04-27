import { createStore } from "vuex";
import profile from "./modules/profile";
import movies from "./modules/movies";

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    profile,
    movies,
  },
});
