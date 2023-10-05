<script setup>
import UserGrade from './UserGrade.vue'
import TechnicalInfo from "./TechnicalInfo.vue";
import SpectatorsGrade from './SpectatorsGrade.vue'
import PosterImg from './PosterImg.vue';

import { useUserInfoStore } from '../stores/userInfo'

    const userInfo = useUserInfoStore()

const props = defineProps({
  movie: {
    type: Object,
    default: null
  },
  spectatorsAverageGrade: {
    type: Number,
    default: 0
  }
});

</script>

<template>
  <div class="film-detail-header">
        <h1 class="film-detail-header__title">{{ props.movie?.title }}</h1>
        <div class="film-detail-header__main">
            <div class="film-detail-header__general-grade">
                <SpectatorsGrade :spectators-average-grade='props.movie?.averageGrade'/>
                <UserGrade v-if="userInfo.idUser !== 0" />
            </div>
            <PosterImg :id-movie="props.movie?.idMovie" />
            <div>
                <TechnicalInfo :movie='movie'/>
            </div>
        </div>
    </div> 
</template>

<style scoped lang='scss'>
.film-detail-header {
    background: rgb(31,31,31);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    &__main {
        display: flex;
        justify-content: space-evenly;
        width: 100%;

        > div {
            flex-grow: 1;
            flex-basis: 0;
            display: flex;
            justify-content: space-evenly;
        }
    }

    &__general-grade {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }

    &__poster {
        max-height: 350px;
        width: 250px;
        padding-bottom: 1rem;
    }
}
</style>
