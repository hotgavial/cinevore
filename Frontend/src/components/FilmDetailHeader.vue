<script setup>
defineProps(['movie', 'spectatorsAverageGrade'])
</script>

<template>
  <div class="film-detail-header">
        <h1 class="film-detail-header__title">{{ movie?.title }}</h1>
        <div class="film-detail-header__main">
            <div class="film-detail-header__spectators-grade-div">
                <div>Note Moyenne des spectateurs</div>
                <div class="film-detail-header__displayed-spectators-grade">{{ spectatorsAverageGrade }}</div>
            </div>
            <img alt="Poster" class="film-detail-header__poster" src="@/assets/images/edward-scissorhands.jpg" />
            <div>
                <div>Votre Note</div>
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
