const movies = {
  namespaced: true,
  state() {
    return {
      movies: [],
    };
  },
  getters: {
    movies: (state) => state.movies,
    title: (state) => state.movies.title,
  },
  mutations: {
    addMoviesFavorite(state, movie) {
      state.movies.push({
        title: movie.title,
        id: movie.id,
        poster_path: movie.poster_path,
        vote_average: movie.vote_average,
        relase_date: movie.relase_date,
        genres_ids: movie.genres_ids,
      });
      console.log(state.movies);
    },
    removeMoviesFavorite(state, movie) {
      // sirve para filtrar los elementos que no coincidan con el id del elemento que se quiere eliminar
      state.movies = state.movies.filter((item) => item.id !== movie.id);
    },
  },
  actions: {},
};

export default movies;
