<template>
  <div class="profile">
    <div class="box d-flex justify-end">
      <img
        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
        alt="avatar"
      />
      <label for="username">Username</label>
      <input
        type="text"
        placeholder="Jane Smith"
        :value="username"
        @input="updateUsername($event.target.value)"
      />

      <label for="username">Password</label>
      <input
        type="text"
        placeholder="**********"
      />

      <button @click="$router.push('/home')">Acceder</button>
    </div>
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

<style scoped>
/* Estilos para el formulario */
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background-color: #f2f2f2;
}

.box {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  width: 500px;
}

img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  margin: 0 auto;
  object-fit: cover;
}

label {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
}

button {
  padding: 10px 20px;
  margin: 0 auto;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  max-width: 100px;
  cursor: pointer;
}

button:hover {
  background-color: #005ea6;
}
</style>
