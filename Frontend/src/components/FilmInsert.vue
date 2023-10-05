<script setup>
    import PosterImg from './PosterImg.vue';
    import SpectatorsGrade from './SpectatorsGrade.vue';

    const props = defineProps({
        movie: {
            type: Object,
            default: null
        }
    });
</script>
<template>
    <div class="film-insert">
        <div v-if="props.movie" class="film-insert__poster">
            <PosterImg  :id-movie="props?.movie.idMovie" :insert="true"/>
        </div>
        <router-link :to="'/film/' + props?.movie.idMovie">
            <div class="film-insert__title">
                {{ props.movie.title }} ({{ props.movie.year }})
            </div>
        </router-link>
        <div class="film-insert__spectators-grade">
            <SpectatorsGrade :spectators-average-grade="props.movie.averageGrade" :insert="true"/>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.film-insert {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    width: 80%;
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    margin-bottom: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    align-items: center;

    &__spectators-grade {
        justify-self: flex-end;
    }

    &__title {
        font-weight: bold;
        font-size: 1.5rem;
        text-decoration: underline;
        text-align: center;
        color: black;
    }
}
</style>