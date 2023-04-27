<template>
  <div class="mx-10">
    <div class="d-flex justify-space-between">
      <h2 class="mt-6">Movies</h2>

      <div class="my-6">
        <div>
          <v-btn color="blue mr-4">
            Add Movie

            <v-dialog v-model="dialog" activator="parent" width="auto">
              <FormCard @add-movie="addMovie" />
            </v-dialog>
          </v-btn>

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
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
          <MovieCard
            :movie="movie"
            :genres="genres"
            @delete-movie="deleteMovie"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>

  <div class="mx-10 mt-8 container-favs">
    <h2>Favorite Movies</h2>
    <v-container fluid v-if="moviesFavs.length">
      <v-row>
        <v-col cols="12" sm="3" v-for="movie in moviesFavs" :key="movie.id">
          <MovieCardFavs :movie="movie" :genres="genres" />
        </v-col>
      </v-row>
    </v-container>
    <p class="paragraph" v-else>Add your favorite movies</p>
  </div>
</template>

<script setup>
import api from "@/services/api.js";
import MovieCard from "./MovieCard.vue";
import MovieCardFavs from "./MovieCardFavs.vue";
import FormCard from "./FormCard.vue";
import { ref, onMounted, watch, computed } from "vue";
import { useStore } from "vuex";

const movies = ref([]);
const genres = ref([]);
const dialog = ref(false);
const selectedCategory = ref("popularity.desc");

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
    const response = await api.get("/discover/movie", {
      params: {
        sort_by: selectedCategory.value,
      },
    });
    movies.value = response.data.results;
  } catch (error) {
    console.log(error);
  }
};

onMounted(async () => {
  console.log("Component is mounted");
  await fetchGenres();
  await fetchMovies();
});

watch(selectedCategory, async () => {
  await fetchMovies();
});

const store = useStore();

const moviesFavs = computed(() => store.getters["movies/movies"]);

function deleteMovie(id) {
  const index = movies.value.findIndex((movie) => movie.id === id);
  if (index !== -1) {
    movies.value.splice(index, 1);
  }
}

function addMovie(movie) {
  movies.value.push(movie);
  console.log(movie.value);
}
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

.paragraph {
  text-align: center;
  font-size: 22px;
  color: gray;
  opacity: 0.6;
}
</style>
