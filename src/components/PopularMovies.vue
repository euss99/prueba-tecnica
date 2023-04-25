<template>
  <div class="mx-10">
    <h2 class="mt-6">Popular Movies</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
          <MovieCard :movie="movie" :genres="genres" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import api from "@/services/api.js";
import MovieCard from "./MovieCard.vue";
import { ref, onMounted } from "vue";

const movies = ref([]);
const genres = ref([]);

const fetchGenres = async () => {
  try {
    const response = await api.get("/genre/movie/list");
    genres.value = response.data.genres;
  } catch (error) {
    console.log(error);
  }
};

const fetchMovies = async () => {
  try {
    const response = await api.get("/movie/popular");
    movies.value = response.data.results;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await fetchGenres();
  await fetchMovies();
});
</script>
