<template>
  <v-app>
    <NavBar />
    <v-main>
      <router-view/>
    </v-main>
    <FooTer />
  </v-app>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import FooTer from './components/FooTer.vue'
</script>
