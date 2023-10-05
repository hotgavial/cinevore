<script setup>
    import { ref, onMounted } from 'vue'
    import { useRoute } from 'vue-router'
    import { useHead } from '@vueuse/head';
    import FilmDetailHeader from '../components/FilmDetailHeader.vue'
    import RedactionGrade from '../components/RedactionGrade.vue'
    import BadgesLevel from '../components/BadgesLevel.vue'
    import TrailerBox from '../components/TrailerBox.vue';
    import AddTrailerLink from '../components/AddTrailerLink.vue';

    useHead({
        link: [
            { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css' },
        ],
    });

    const numberStarsRedaction = ref(10)
    const movie = ref({
        idMovie: 0,
        title: '',
        originalTitle: null,
        year: 0,
        crew: null,
        trailer: null
    })

    const isOpenModalTrailer = ref(false)
    const route = useRoute()

    onMounted(() => {
        const {idMovie} = route.params;
        fetch(`http://localhost:3000/api/movie/${idMovie}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            movie.value.idMovie = data.idMovie
            movie.value.title = data.title
            movie.value.originalTitle = data.originalTitle
            movie.value.year = data.year
            movie.value.trailer = data.trailer
            movie.value.averageGrade = data.averageGrade;
            const directors = data.Actors.filter(actor => actor.ActorMovie.job === 'director');
            const actors = data.Actors.filter(actor => actor.ActorMovie.job === 'actor');
            const crew = {
                directors,
                actors
            }
            movie.value.crew = crew
        })
        .catch((error) => console.error(error));
    })
</script>

<template>
    <AddTrailerLink v-if="isOpenModalTrailer" @close-modal-trailer="isOpenModalTrailer = false" />
    <div class="film-detail">
        <FilmDetailHeader :movie='movie'/>
        <div class="film-detail__body">
            <div class="film-detail__body-1">
                <RedactionGrade :redaction-grade='numberStarsRedaction' />
                <BadgesLevel /> 
            </div>
            <div>
                <TrailerBox :trailer-link='movie.trailer' @open-modal-trailer="isOpenModalTrailer = true"/>
            </div>
            <div>
                Fiche Technique
            </div>
            <div>
                <h3>Casting</h3>
            </div>
            <div>
                Notation détaillée
            </div>
            <div>
                <div>
                    Principales qualités
                </div>
                <div>
                    Principaux défauts
                </div>
            </div>
            <div>
                <h3>Critques</h3>
            </div>
            <div>
                <h3>Listes</h3>
            </div>
        </div>
        
    </div>
    
</template>
<style lang='scss'>
    .film-detail {
        flex-direction: column;

        &__body-1 {
            display: flex;
            width: 100%;

            > div {
                width: 50%;
            }
        }

         &__body {
            width: 100%;
            padding: 3rem 5rem;
        }

        &__badge-level-progress {
            display: flex;
            align-items: center;
        }

        &__badge-level {
            width: 50px;
            height: 50px;
            text-align: center;
            border: solid 4px black;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            font-weight: bold;
            color: gold;
            font-size: 30px;
            padding-top: unset !important;
            margin-right: 0.2rem;
        }

        &__badge-level-target {
            border: 4px solid black;
            padding-top: unset !important;
            color: gold;
            font-weight: bold;
            font-size: 20px;
            padding: 0px 5px;
            margin-left: 2px;
        }

        &__progress-bar {
            width: 50%;
            height: 40px;
            border: black 4px solid;
            padding-top: unset !important;
        }

        &__progress-fill {
            width: 60%;
            height: 100%;
        }

        &__badge-ranking {
            font-weight: bold;
            margin-left: 5px;
        }
    }

    h3 {
                border-left: 7px blue solid;
                padding-left: 0.8rem;
                margin-bottom: 1rem;
                font-weight: bold;
                align-self: flex-start;
            }
</style>
