<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useUserInfoStore } from '../stores/userInfo'

const userInfo = useUserInfoStore()

const userReview = ref(null)
const userGrade = ref(null)
const userReviewId = ref(null)
const isHovered = ref(false)
const hoveredIndex = ref(0)

const route = useRoute()

onMounted(() => {
    fetch(`http://localhost:3000/api/review/${route.params.idMovie}/${userInfo.idUser}`, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            if (data !== null) {
                userReview.value = data.review ?? null;
                userGrade.value = data.grade ?? null;
                userReviewId.value = data.idReview ?? null;
            }
        })
        .catch((error) => console.error(error));
})

function determinateClassForStar(index) {
    if(isHovered.value) {
        return index <= hoveredIndex.value ? 'fa fa-star hovered' : 'fa fa-star'
    } 
        return index <= userGrade.value ? 'fa fa-star checked' : 'fa fa-star'
    
    
}

function onMouseOver(index) {
    isHovered.value = true
    hoveredIndex.value = index
}

function onMouseLeave() {
    isHovered.value = false
}

function changeUserGrade(index) {
    const token = localStorage.getItem('token')
    if(token) {
        if(userGrade.value) {
        fetch(`http://localhost:3000/changeGrade/${userReviewId.value}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({grade: index}),
        })
        .then((response) => response.json())
        .then(() => {
            userGrade.value = index;
        })
        .catch((error) => console.error(error));
    } else {
         fetch(`http://localhost:3000/addGrade`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({grade: index, idUser: 2, idMovie: route.params.idMovie}),
        })
        .then((response) => response.json())
        .then(() => {
            userGrade.value = index;
        })
        .catch((error) => console.error(error));
    }
    }
    
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