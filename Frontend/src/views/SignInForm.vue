<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router';
import TextInput from '../components/TextInput.vue'
import { useUserInfoStore } from '../stores/userInfo'

const userInfo = useUserInfoStore()

const pseudo = ref('')
const password = ref('')
const connexionError = ref(false)
const router = useRouter();

function submitForm() {
  fetch('http://localhost:3000/signIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({pseudo: pseudo.value, password: password.value}),
  })
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } 
      connexionError.value = true;
      return null;
  })
  .then(data => {
    if (data) {
      connexionError.value = false;
      localStorage.setItem('pseudo', data.pseudo);
      localStorage.setItem('idUser', data.idUser);
      localStorage.setItem('token', data.token);
      userInfo.setIdUser(data.idUser);
      router.push({ path: '/film/1' });
    }
  })
  .catch((error) => console.error(error));
}

</script>

<template>
  <div class="signInForm">
    <div class="signInForm__main">
      <form class="sigInForm__form" @submit.prevent="submitForm">
          <TextInput v-model='pseudo' width="80%" placeholder="" height="50%" label="Pseudo"/>
          <TextInput v-model='password' width="80%" placeholder="" height="50%" label="Mot de passe"/>
          <button type="submit">Se Connecter</button>
          <div v-if="connexionError">Nom d'utilisateur ou mot de passe incorrect</div>
      </form>
    </div>
  </div> 
</template>

<style scoped lang='scss'>
.signInForm {
  width: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 4rem);

  &__main {
    border: solid 2px black;
    text-align: center;
    width: 50%;
    height: 40%;
  }

  &__form {
    display: flex;
    flex-direction: column;
  }
}
</style>