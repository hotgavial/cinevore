<script setup>
  import { ref, onMounted } from 'vue'
  import FilmInsert from '../components/FilmInsert.vue';

  const movies = ref([]);
  
  onMounted(() => {
        fetch(`http://localhost:3000/api/movie/home-page`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            movies.value = data;
        })
        .catch((error) => console.error(error));
    })
</script>

<template>
  <div class="home-page">
      <h2 class="homme-page__title">Films à la une</h2>
      <div class="home-page__list">
          <FilmInsert v-for="movie in movies" :key="movie.idMovie" :movie="movie" />
      </div>
  </div>
</template>
<style scoped lang='scss'>
.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f0f0f0;
    justify-content: center;
    width: 100%;

    &__list {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>
