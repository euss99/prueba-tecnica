<template>
  <v-hover v-slot="{ hover }" open-delay="200">
    <v-card :elevation="hover ? 16 : 2" :class="{ 'on-hover': hover }">
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
        <div class="text-grey ml-4">{{ movie.release_date }}</div>
        <div class="my-4 ml-4 subtitle-2">
          <span v-for="(genre, index) in movie.genre_ids" :key="genre">
            {{ genretypeName(genre, index) }}
          </span>
        </div>
      </v-card-text>
      <v-card-text> </v-card-text>
    </v-card>
  </v-hover>
</template>

<script setup>
import { computed, defineProps, ref } from "vue";

const props = defineProps({
  movie: {
    required: true,
  },
  genres: {
    required: true,
  },
});

// Path de la imagen de la pelicula.
const posterPath = computed(() => {
  return `https://image.tmdb.org/t/p/w500${props.movie.poster_path}`;
});

const showError = ref(false);

const onImageError = () => {
  showError.value = true;
};

// Función para obtener el nombre del genero.
const genretypeName = (geraId, index) => {
  // geraId: id del genero de la pelicula.
  // index: indice del genero de la pelicula.
  for (const item of props.genres) {
    // Si el id del genero es igual al id del genero de la pelicula.
    if (item.id == geraId) {
      // Si es el ultimo genero de la lista, no se agrega la coma.
      if (index == props.movie.genre_ids.length - 1) {
        return item.name;
      } else {
        return item.name + ", ";
      }
    }
  }
};
</script>

<style>
.title-text {
  width: 85%;
}

.image-error {
  width: 100%;
  height: 100%;
  background-color: #e1e1e1;
}
</style>
