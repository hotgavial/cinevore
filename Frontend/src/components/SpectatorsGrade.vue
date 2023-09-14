<script setup>
const props = defineProps({
  spectatorsAverageGrade: {
    type: Number,
    default: null
  }
});
</script>

<template>
<div class='spectators-grade'>
    <div>Note Moyenne des spectateurs</div>
    <div class="spectators-grade__grade">{{ props.spectatorsAverageGrade }}</div>
</div>
</template>

<style scoped lang='scss'>
    .spectators-grade {
        display: flex;
        align-items: center;
        flex-direction: column;

        &__grade {
            margin-top: 1rem;
            display: inline-flex; 
            justify-content: center; 
            align-items: center; 
            background-color: black;
            color: greenyellow;
            font-weight: bold;
            font-size: 2rem;
            border: green 0.4rem solid;
            border-radius: 50%; 
            padding: 10px; 
            width: 100px;
            height: 100px;
        }
    }
</style>