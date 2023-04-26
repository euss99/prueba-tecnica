<template>
  <nav>
    <v-app-bar app color="blue" dark>
      <v-toolbar-title class="ml-16">Movie DB</v-toolbar-title>
      <router-link to="/" class="ml-2">
        <v-btn text class="text-white">Home</v-btn>
      </router-link>
      <router-link to="/actors" class="ml-2">
        <v-btn text class="text-white">Actors</v-btn>
      </router-link>
      <router-link to="/profile" class="ml-2">
        <v-btn text class="text-white">Profile</v-btn>
      </router-link>
      <router-link to="/contact" class="ml-2 mr-16">
        <v-btn text class="text-white">Contact</v-btn>
      </router-link>

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
