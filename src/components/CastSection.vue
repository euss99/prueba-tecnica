<template>
  <div class="container-cast">
    <h1 class="mt-2 text-grey">Cast</h1>
    <v-container>
      <v-row>
        <v-col cols="12" sm="3" :key="index" v-for="(cast, index) in casts">
          <v-card>
            <v-img :src="castProfileImage(cast)"></v-img>
            <v-card-title class="subtitle-2">{{ cast.name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!-- OPTIONS API -->
<script>
export default {
  props: {
    casts: {
      required: true,
    },
  },

  methods: {
    castProfileImage(cast) {
      if (!cast.profile_path) {
        return "https://via.placeholder.com/300x450?text=Image+Not+Found";
      }
      return `https://image.tmdb.org/t/p/w300${cast.profile_path}`;
    },
  },
};
</script>

<style scoped>
.container-cast {
  margin-bottom: 180px;
}
</style>
