<script setup>

const props = defineProps({
  trailerLink: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['openModalTrailer'])

function openModalTrailer() {
    emit('openModalTrailer')
}

</script>

<template>
<div class="film-detail__trailer-box">
    <h3>Bande-Annonce</h3>
    <iframe
        v-if="props.trailerLink"
        width="560"
        height="315"
        :src="props.trailerLink"
        frameborder="0"
        allowfullscreen
    ></iframe>
    <div v-else>
        <p>Aucune bande-annonce n'a été renseigné pour le moment</p>
        <p><a @click="openModalTrailer">Proposer un lien Youtube vers une bande annonce</a></p> 
    </div>
</div>
</template>

<style scoped lang='scss'>
</style>
