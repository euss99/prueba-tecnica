<template>
  <v-card>
    <v-img :src="profileImage" alt="" />

    <v-card-title class="subtitle-2"> {{ actor.name }}</v-card-title>

    <v-card-text>
      <p class="grey--text">
        {{ knownFor }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    actor: {
      required: true,
    },
  },
  computed: {
    profileImage() {
      return (
        "https://image.tmdb.org/t/p/w235_and_h235_face/" +
        this.actor.profile_path
      );
    },
    knownFor() {
      let knownStr = "";
      for (let i; i < this.actor.known_for.length - 1; i++) {
        knownStr += this.actor.known_for[i].title;
      }
      return knownStr;
    },
  },
};
</script>

<style></style>
