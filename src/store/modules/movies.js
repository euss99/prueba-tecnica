const movies = {
  namespaced: true,
  state() {
    return {
      movies: [],
    };
  },
  getters: {
    movies: (state) => state.movies,
  },
  mutations: {
    addMoviesFavorite(state, movie) {
        state.movies.push(movie);
        console.log(state.movies);
    },
  },
  actions: {},
};

export default movies;
