<script setup>

import { ref } from 'vue'
import TextInput from '../components/TextInput.vue'

const pseudo = ref('')
const password = ref('')

</script>

<template>
  <div class="registerForm">
    <div class="registerForm__main">
      <form class="regist" action="">
          <TextInput v-model='pseudo' width="80%" placeholder="" height="50%" />
          <TextInput v-model='password' width="80%" placeholder="" height="50%" />
      </form>
    </div>
  </div> 
</template>

<style scoped lang='scss'>
.registerForm {
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
  }
}
</style>