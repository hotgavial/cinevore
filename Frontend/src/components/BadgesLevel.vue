<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const badges = ref([])
const route = useRoute()

onMounted(() => {
    const idMovie = route.params.idMovie;
    fetch(`http://localhost:3000/api/badges/${idMovie}/2`, {
        method: "GET",
    })
    .then((response) => response.json())
    .then((data) => {
        badges.value = data
    })
    .catch((error) => console.error(error));
})

function determinateBadgeColor(type) {
    switch (type) {
        case 'country' :
            return 'blue'
        case 'genre' :
            return 'red'
        case 'year' :
            return 'darkviolet'
        case 'decade' :
            return 'black'
        case 'director' :
            return 'green'
        case 'actor' :
            return 'orangered'
        case 'actress' :
            return 'deeppink'
        default :
            return 'blue'
    }
}
</script>

<template>
<div class="film-detail__bagdes-level">
    <h3>Niveau des badges</h3>
    <div v-for="badge in badges" :key="badge.title">
        <div>{{ badge.title }}</div>
        <div class="film-detail__badge-level-progress">
            <div class="film-detail__badge-level" :style="{ backgroundColor: determinateBadgeColor(badge.category) }"> {{ badge.currentLevel }}</div>
            <div class="film-detail__progress-bar">
                <div class="film-detail__progress-fill" :style="{ width: badge.progress, backgroundColor: determinateBadgeColor(badge.category) }"></div>
            </div>
            <div class="film-detail__badge-level-target" :style="{ backgroundColor: determinateBadgeColor(badge.category) }">
                {{ badge.moviesSeen }} / {{ badge.target }}
            </div>
            <div class="film-detail__badge-ranking">
                {{ badge.ranking }} sur {{ badge.totalParticipants }}
            </div>
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
        justify-content: space-between;
        width: 100%;

        > div {
            flex-grow: 1;
            flex-basis: 0;
            display: flex;
            justify-content: center;
        }
    }

    &__spectators-grade-div {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start !important;
    }

    &__displayed-spectators-grade {
        margin-top: 1rem;
        display: inline-flex; /* Utilisez display: flex avec inline-flex pour centrer le texte */
        justify-content: center; /* Centre le contenu horizontalement */
        align-items: center; /* Centre le contenu verticalement */
        background-color: black;
        color: greenyellow;
        font-weight: bold;
        font-size: 2rem;
        border: green 0.4rem solid;
        border-radius: 50%; /* 50% du rayon du cercle crée une forme circulaire */
        padding: 10px; /* Espacement intérieur pour éloigner le contenu du bord du cercle */
        width: 100px;
        height: 100px;
    }

    &__poster {
        max-height: 350px;
        width: 250px;
        padding-bottom: 1rem;
    }
}
</style>
