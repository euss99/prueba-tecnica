<template>
  <v-footer class="footer bg-blue text-center">
    <v-card flat tile class="bg-blue white--text text-center">
      <v-card-text>
        <v-btn
          v-for="icon in state.icons"
          :key="icon"
          class="mx-6"
          icon
          variant="text"
        >
          <v-icon size="32px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem
        reprehenderit dolorum aspernatur facilis quos mollitia, nemo impedit
        iste quaerat rem! Animi excepturi consectetur voluptas fugiat expedita
        quasi impedit dolore corrupti.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        {{ new Date().getFullYear() }} — <strong>Movie DB</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<!-- COMPOSITON API -->
<script setup>
import { reactive } from "vue";

const state = reactive({
  icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
});
</script>

<style>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
