<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/MainHeader.vue'

</script>

<template>  
  <main>
      <MainHeader />
      <div class="main-content">
        <RouterView />
      </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: darkblue;
  min-height: 100vh;
  width: 100vw;
}

.main-content {
  width: 90vw;
  background-color: white;
  min-height: 100%;;
}
</style>
