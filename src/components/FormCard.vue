<template>
  <div class="container">
    <form class="form">
      <div class="form-group">
        <label for="title" class="form-label">Title:</label>
        <input
          type="text"
          id="title"
          v-model="title"
          required
          class="form-control"
          placeholder="Title of the movie"
        />
      </div>
      <div class="form-group">
        <label for="voteAvarage" class="form-label">Vote Average:</label>
        <input
          type="number"
          id="voteAvarage"
          v-model="vote_average"
          required
          class="form-control"
          placeholder="1 - 10"
        />
      </div>
      <div class="form-group">
        <label for="releaseDate" class="form-label">Release date:</label>
        <input
          type="date"
          id="releaseDate"
          v-model="release_date"
          required
          class="form-control"
        />
      </div>
      <button type="button" class="btn btn-primary" @click="addMovie">
        Add Movie
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const title = ref("");
const id = new Date().getTime();
const release_date = ref("");
const vote_average = ref("");

const emits = defineEmits(["add-movie"]);

function addMovie(newMovie) {
  newMovie.value = {
    title: title.value,
    id: id.valueOf,
    vote_average: vote_average.value,
    release_date: release_date.value,
  };
  emits("add-movie", newMovie.value);

  title.value = "";
  release_date.value = "";
  vote_average.value = "";
}
</script>

<style>
.container {
  width: 600px;
  max-width: 500px;
  background-color: white;
  margin: 0 auto;
  padding: 20px;
  border-radius: 5px;
}

.form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 20px;
}

.form-label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

.form-control {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  line-height: 1.5;
  width: 100%;
}

.btn {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  cursor: pointer;
}

.btn:hover {
  background-color: #0069d9;
}
</style>
