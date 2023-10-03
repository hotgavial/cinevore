<script setup>
import { computed } from 'vue'

const props = defineProps({
  movie: {
    type: Object,
    default: null
  }
});

const directors = computed(() => (props.movie?.crew?.directors?.length > 0 ? props.movie.crew.directors.map(director => `${director.firstName} ${director.lastName}`).join(', ') : 'Aucun'));
const actors = computed(() => (props.movie?.crew?.actors?.length > 0 ? props.movie.crew.actors.map(actor => `${actor.firstName} ${actor.lastName}`).join(', ') : 'Aucun'));

</script>

<template>
  <div v-if="movie" class="technical-info">
      <p>Année: {{ movie.year }}</p>
      <p>Réalisé par : {{ directors }}</p>
      <p>Acteurs : {{ actors }}</p>
  </div>
</template>

<style scoped lang='scss'>
</style>
