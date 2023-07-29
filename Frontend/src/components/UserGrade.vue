<script setup>
import { onMounted, ref } from 'vue'

const userReview = ref(null)
const userGrade = ref(null)
const isHovered = ref(false)
const hoveredIndex = ref(0)

onMounted(() => {
    fetch(`http://localhost:3000/api/review/1/2`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            userReview.value = data.review
            userGrade.value = data.grade
        })
        .catch((error) => console.error(error));
})

function determinateClassForStar(index) {
    if(isHovered.value) {
        return index <= hoveredIndex.value ? 'fa fa-star hovered' : 'fa fa-star'
    } else {
        return index <= userGrade.value ? 'fa fa-star checked' : 'fa fa-star'
    }
    
}

function onMouseOver(index) {
    isHovered.value = true
    hoveredIndex.value = index
}

function onMouseLeave() {
    isHovered.value = false
}

function changeUserGrade(index) {
    userGrade.value = index
}

</script>

<template>
<div class="user-grade">
    <span v-for="index in 10" :key="index" :class="determinateClassForStar(index)" @mouseover="onMouseOver(index)" @mouseleave="onMouseLeave()" @click="changeUserGrade(index)"/>
</div>
</template>

<style scoped lang='scss'>
.user-grade {
    width: 100%;
    display: flex;
    font-size: 2rem;
    justify-content: space-around;
    width: 80%;
}

.hovered {
    color: blue;
}
</style>