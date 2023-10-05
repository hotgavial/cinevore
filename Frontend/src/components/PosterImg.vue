<script setup>

    import { computed, ref } from 'vue'


    const props = defineProps({
        idMovie: {
            type: Number,
            default: null
        },
        insert: {
            type: Boolean,
            default: false
        }
    });

    const posterExist = ref(true);

    const posterLink = computed(() => {
        if(posterExist.value === false) {
            return new URL(`/src/assets/images/default-poster.jpg`, import.meta.url).href 
        } 
        const idMovie = props?.idMovie;
        return new URL(`/src/assets/images/${idMovie}-poster.jpg`, import.meta.url).href  
    })

    function noPoster() {
        posterExist.value = false;
    }
</script>

<template>
     <div className='poster-img'>
        <img :class="props.insert ? 'poster-img__img--insert' : 'poster-img__img'" alt='poster' :src='posterLink' @error="noPoster" />
    </div>
</template>

<style scoped lang='scss'>

.poster-img {

&__img {
    max-height: 350px;
    width: 250px;
    padding-bottom: 1rem;

    &--insert {
        width: 100px;
    }
}
}

</style>