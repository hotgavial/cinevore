<script setup>
    import { ref } from 'vue' 
    import TextInput from './TextInput.vue'

    const searchText = ref('')
</script>

<template>
    <header class="main-header">
        <div>
            <TextInput v-model="searchText" width="80%" placeholder="Rechercher" height="50%" />
        </div>
        <div class="main-header__website-title">Cinévore</div>
        <div>Espace Utilisateur</div>
    </header>
</template>

<style scoped lang='scss'>

.main-header {
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 4rem;

    > div {
        width: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    &__website-title {
        font-weight: bold;
        color: gold;
        font-size: 2rem;
    }

    &__search-box {
        padding: 10px;
        border-radius: 25px;
        border: 2px solid #ccc;
        outline: none;
        width: 300px;
    }
}


</style>
