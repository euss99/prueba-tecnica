<template>
  <div class="container-actor mx-3">
    <h2 class="mt-2 text-grey">Popular Actors</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" :key="actor.id" v-for="actor in this.actors">
          <ActorsCard :actor="actor" />
        </v-col>
        <v-col cols="12" class="d-flex justify-center mt-5">
          <v-btn
            class="mx-2"
            icon="mdi-arrow-left"
            color="blue"
            v-on:click.prevent="previous()"
          >
          </v-btn>
          <v-btn
            class="mx-2"
            icon="mdi-arrow-right"
            color="blue"
            v-on:click.prevent="next()"
          >
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!-- OPTIONS API -->
<script>
import api from "@/services/api.js";
import ActorsCard from "@/components/ActorsCard.vue";

let currentPage = 1;

export default {
  data() {
    return {
      actors: [],
    };
  },

  components: {
    ActorsCard,
  },

  mounted() {
    this.fetchActors(currentPage);
  },

  methods: {
    async fetchActors(page) {
      try {
        const response = await api.get("/person/popular", {
          params: {
            page: page,
          },
        });
        this.actors = response.data.results;
        console.log(this.actors);
      } catch (error) {
        console.log(error);
      }
    },
    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          currentPage++;
          this.fetchActors(currentPage);
        }
      };
    },
    next() {
      currentPage++;
      this.fetchActors(currentPage);
    },
    previous() {
      if (currentPage > 1) {
        currentPage--;
        this.fetchActors(currentPage);
      }
    },
  },
};
</script>

<style>
.container-actor {
  margin-bottom: 200px;
}
</style>
