<template>
  <v-card>
    <router-link :to="`/movie/${movie.id}`">
      <v-img :src="posterPath" alt="" class="" @error="onImageError"></v-img>
      <div v-if="showError" class="image-error"></div>
    </router-link>
    <v-card-text>
      <div class="d-flex justify-space-between align-center">
        <v-card-title class="title-text subtitle-2">{{
          movie.title
        }}</v-card-title>
        <div align="center" class="mx-0">
          {{ movie.vote_average }}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            width="19px"
          >
            <path
              d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
            />
          </svg>
        </div>
      </div>
    </v-card-text>
    <v-btn
      tile
      color="red"
      class="favorite"
      @click="removeToFavorite(movie)"
    >
      <v-icon left>mdi-heart</v-icon> Remove to Favorites
    </v-btn>
  </v-card>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const props = defineProps({
  movie: {
    required: true,
  },
  genres: {
    required: true,
  },
});

const posterPath = computed(() => {
  if (!props.movie.poster_path) {
    return "https://via.placeholder.com/500x750?text=Image+Not+Found";
  }
  return `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
});

const showError = ref(false);

const onImageError = () => {
  showError.value = true;
};

const removeToFavorite = (movie) => {
  store.commit("movies/removeMoviesFavorite", movie);
};
</script>

<style>
.v-card-text {
  padding: 5px 10px;
}
.title-text {
  width: 85%;
}

.image-error {
  width: 100%;
  height: 100%;
  background-color: #e1e1e1;
}

.favorite {
  width: 100%;
  margin-top: 10px;
  color: #fff;
  padding: 0;
}
</style>
