<script setup>
defineProps(['spectatorsAverageGrade'])
</script>

<template>
<div class='spectators-grade'>
    <div>Note Moyenne des spectateurs</div>
    <div class="spectators-grade__grade">{{ spectatorsAverageGrade }}</div>
</div>
</template>

<style scoped lang='scss'>
    .spectators-grade {
        display: flex;
        align-items: center;
        flex-direction: column;

        &__grade {
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
    }
</style>