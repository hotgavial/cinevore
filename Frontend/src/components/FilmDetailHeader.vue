<script setup>
import { computed } from 'vue'
import UserGrade from './UserGrade.vue'
import TechnicalInfo from "./TechnicalInfo.vue";
import SpectatorsGrade from './SpectatorsGrade.vue'

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

const posterLink = computed(() => {
    const title = props.movie?.title.toLowerCase().replace(/ /g, '-')
    return new URL(`/src/assets/images/${title}.jpg`, import.meta.url).href   
})

</script>

<template>
  <div class="film-detail-header">
        <h1 class="film-detail-header__title">{{ movie?.title }}</h1>
        <div class="film-detail-header__main">
            <div class="film-detail-header__general-grade">
                <SpectatorsGrade :spectators-average-grade='spectatorsAverageGrade'/>
                <UserGrade v-if="userInfo.idUser !== 0" />
            </div>
            <img alt="Poster" class="film-detail-header__poster" :src="posterLink" />
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
