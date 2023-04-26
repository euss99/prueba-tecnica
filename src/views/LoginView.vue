<template>
  <div class="container-login">
    <v-card class="mx-auto" elevation="1" width="500">
      <v-card-title class="py-5 font-weight-black"
        >Sign in to your account</v-card-title
      >

      <v-card-text>
        <div class="text-subtitle-2 font-weight-black mb-1">Username</div>

        <v-text-field
          label="Enter value here"
          single-line
          variant="outlined"
        ></v-text-field>

        <div class="text-subtitle-2 font-weight-black mb-1">Password</div>

        <v-text-field
          label="Enter value here"
          single-line
          variant="outlined"
          :value="username"
        ></v-text-field>

        <v-btn
          block
          class="text-none mb-4"
          color="indigo-darken-3"
          size="x-large"
          @click="$router.push('/home')"
        >
          Login
        </v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState("profile", ["username"]),
  },
  methods: {
    ...mapActions("profile", ["updateUsername"]),
  },
};
</script>

<style>
.container-login {
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
