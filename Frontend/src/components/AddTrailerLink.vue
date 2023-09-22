<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const emit = defineEmits(['closeModalTrailer'])

const route = useRoute()

const isFormSent = ref(false)
const trailerLink = ref('')
const isLinkNotValid = ref(false)

function closeModalTrailer() {
    emit('closeModalTrailer')
}

function sendForm(event) {
    event.preventDefault();
    const youtubeLinkRegex = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/watch\?v=([a-zA-Z0-9_-]+)$/;
    const {idMovie} = route.params;
    if(youtubeLinkRegex.test(trailerLink.value)) {
       fetch(`http://localhost:3000/addTrailer`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({trailerLink: trailerLink.value, idMovie}),
        })
        .then((response) => response.json())
        .then(() => {
            isFormSent.value = true
            isLinkNotValid.value = false
        })
        .catch((error) => console.error(error)); 
    } else {
        isLinkNotValid.value = true
    }
    
}
</script>

<template>
<div class="add-trailer-link">
    <div class="modal-content">
        <span class="close" @click="closeModalTrailer">&times;</span>
        <h2>Ajouter un lien YouTube</h2>
        <form id="youtubeForm">
            <label for="youtubeLink">Lien YouTube :</label>
            <input id="youtubeLink" v-model="trailerLink" type="text" name="trailerLink" required>
            <button @click='sendForm($event)'>Ajouter</button>
        </form>
        <p v-if="isFormSent" class="add-trailer-link__form-sent">Merci de votre contribution !</p>
        <p v-if="isLinkNotValid" class="add-trailer-link__not-valid">Le lien que vous avez fourni n'est pas valide</p>
    </div>
</div>
</template>

<style scoped lang='scss'>
.add-trailer-link {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);

    &__form-sent {
        color: green;
    }

    &__not-valid {
        color: red;
    }
}

.modal-content {
    background-color: #fff;
    margin: 10% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
    max-width: 400px;
    position: relative;
}

.close {
    position: absolute;
    top: 0;
    right: 0;
    padding: 10px;
    cursor: pointer;
}

form {
    margin-top: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="text"] {
    width: 100%;
    padding: 10px;
    margin-bottom: 20px;
}

button[type="submit"] {
    background-color: #007BFF;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>
