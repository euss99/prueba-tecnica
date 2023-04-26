<template>
  <div class="mx-10">
    <div class="d-flex justify-space-between">
      <h2 class="mt-6">Movies</h2>
      <div class="my-6">
        <label for="category-select">Select category:</label>
        <select
          id="category-select"
          v-model="selectedCategory"
          class="mx-4 px-2 py-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="popularity.desc">Most popular</option>
          <option value="release_date.desc">Newest releases</option>
          <option value="original_title.asc">A-Z</option>
        </select>
      </div>
    </div>
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
import { ref, onMounted, watch } from "vue";

const movies = ref([]);
const genres = ref([]);
const selectedCategory = ref("popularity.desc");

// Función para obtener los géneros
const fetchGenres = async () => {
  try {
    const response = await api.get("/genre/movie/list");
    genres.value = response.data.genres;
  } catch (error) {
    console.log(error);
  }
};

// Función para obtener las películas
const fetchMovies = async () => {
  try {
    const response = await api.get("/discover/movie", {
      params: {
        // Seleccionamos la categoría
        sort_by: selectedCategory.value,
      },
    });
    movies.value = response.data.results;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  await fetchGenres();
  await fetchMovies();
});

// Se ejecuta cuando cambia el valor de selectedCategory
watch(selectedCategory, async () => {
  await fetchMovies();
});
</script>

<style scoped>
#category-select {
  font-size: 16px;
  font-weight: 500;
  color: #4a4a4a;
  background-color: #fff;
  border: 1px solid #dbdbdb;
}

#category-select:hover,
#category-select:focus {
  border-color: #3273dc;
}

#category-select:focus {
  box-shadow: 0 0 0 2px rgba(50, 115, 220, 0.2);
}

#category-select option {
  font-size: 16px;
  font-weight: 500;
  color: #4a4a4a;
}
</style>
