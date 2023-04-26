<template>
  <div>Detalle</div>
</template>

<script setup>
import { reactive, toRefs, watch, computed, inject, defineExpose } from "vue";
import api from "@/services/api.js";

const route = inject("$route");

const state = reactive({
  movie: {
    credits: {
      crew: {},
    },
    images: {
      backdrops: {},
    },
  },
  isVideo: false,
  medioURL: "",
  dialog: false,
});

const posterPath = computed(() => {
  return "https://image.tmdb.org/t/p/w500" + state.movie.poster_path;
});

const fetchMovie = async (movieId) => {
  const response = await api.get(`/movie/${movieId}`, {
    params: {
      append_to_response: "credits,videos,images",
    },
  });
  state.movie = response.data;
};

watch(
  () => route.params.id,
  (newVal) => {
    fetchMovie(newVal);
  },
  { immediate: true }
);

const openYouTubeModel = () => {
  state.medioURL = youtubeVideo();
  state.isVideo = true;
};

const youtubeVideo = () => {
  const video = state.movie.videos.results.find(
    (video) => video.site === "YouTube"
  );
  return video ? `https://www.youtube.com/embed/${video.key}` : "";
};

defineExpose({
  movieData: toRefs(state),
  computedProps: {
    posterPath,
  },
  methods: {
    fetchMovie,
    openYouTubeModel,
    youtubeVideo,
  },
});
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
</style>
