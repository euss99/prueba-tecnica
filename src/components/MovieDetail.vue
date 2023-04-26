<template>
  <div>
    <v-container>
      <v-row class="d-flex justify-sm-space-between">
        <v-col cols="12" sm="3">
          <div class="d-flex justify-end">
            <img class="posterImg" :src="posterPath" :alt="movie.title">
          </div>
        </v-col>

        <v-col cols="12" sm="8">
          <h2 class="text-grey text-grey-darken-3 mt-5">
            {{ this.movie.title }}
          </h2>
          <v-row>
            <v-col cols="12" sm="2">
              <v-rating
                :model-value="movie.vote_average / 2"
                color="amber"
                dense
                readonly
                half-increments
                size="14"
              />
            </v-col>
            <v-col class="d-flex align-center" cols="12" sm="3">
              <span class="text-grey ml-n7">
                {{ movie.vote_average * 10 }}% | {{ movie.release_date }}
              </span>
            </v-col>
            <v-col class="d-flex align-center" cols="12" sm="7">
              <div class="text-grey text-subtitle-2 ml-n6">
                <span
                  v-for="(item, index) in movie.genres"
                  :key="index"
                  class="ml-1"
                >
                  {{ item.name }}
                  <span v-if="movie.genres.length - 1 != index">,</span>
                </span>
              </div>
            </v-col>
          </v-row>
          <p class="mt-5 text-grey text-grey-darken-3">
            {{ this.movie.overview }}
          </p>
          <div class="mt-5">
            <h2 class="mt-5 text-grey text-grey-darken-3">Featured Cast</h2>
            <div
              class="mt-5"
              v-for="(crew, index) in movie.credits.crew"
              :key="index"
            >
              <div v-if="index < 2" class="">
                <h3>{{ crew.name }}</h3>
                <span class="text-grey">{{ crew.job }}</span>
              </div>
            </div>
          </div>

          <v-btn tile color="blue" @click="playTrailer">
            <v-icon>mdi-play</v-icon> Play Trailer
          </v-btn>

          <v-btn tile color="blue" class="ml-2">
            <v-icon left>mdi-heart</v-icon> Add to Favorites
          </v-btn>
        </v-col>
      </v-row>
      <v-divider class="mt-5"></v-divider>
      <CastSection :casts="movie.credits.cast" />
    </v-container>
  </div>
</template>

<!-- OPTIONS API -->
<script>
import api from "@/services/api.js";
import CastSection from "./CastSection.vue";
export default {
  components: {
    CastSection,
  },
  data() {
    return {
      movie: {
        credits: {
          cast: {},
        },
        images: {
          backdrops: {},
        },
      },
    };
  },

  mounted() {
    this.fetchMovie(this.$route.params.id); // Se obtiene la película en base al id
  },

  // Se ejecuta cuando cambia el valor de $route.params.id
  watch: {
    "$route.params.id": {
      handler() {
        this.fetchMovie(this.$route.params.id);
      },
      immediate: true,
    },
  },

  computed: {
    posterPath() {
      return `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    },
  },

  methods: {
    async fetchMovie(movieId) {
      try {
        const response = await api.get(`/movie/${movieId}`, {
          params: {
            append_to_response: "credits,images,videos",
          },
        });
        this.movie = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    playTrailer() {
      const url = this.youtubeVideo(); // Se obtiene el video de youtube
      window.open(url, "_blank"); // Se abre en una nueva pestaña
    },
    youtubeVideo() {
      if (!this.movie.videos) return; // Si no hay videos, no se muestra nada
      return `https://www.youtube.com/embed/${this.movie.videos.results[0].key}`;
    },
  },
};
</script>

<style scoped>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}
.iframe-container iframe {
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}

.posterImg {
  max-width: 373px;
  max-height: 570px;
  object-fit: cover;
}
</style>
