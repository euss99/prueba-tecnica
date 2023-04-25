<template>
  <nav>
    <v-app-bar app color="blue" dark>
      <v-toolbar-title class="ml-16">Movie DB</v-toolbar-title>
      <v-btn text class="ml-2">Movies</v-btn>
      <v-btn text class="ml-2">Actors</v-btn>
      <v-btn text class="ml-2">Profile</v-btn>
      <v-btn text class="ml-2 mr-16">Contact</v-btn>

      <p class="mr-4">{{ name }}</p>
      <v-avatar class="mr-16" size="40">
        <v-img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        ></v-img>
      </v-avatar>
    </v-app-bar>
  </nav>
</template>

<script setup>
import { ref } from "vue";

// const drawer = ref(null);
const name = ref("John Doe");
</script>

<style></style>
