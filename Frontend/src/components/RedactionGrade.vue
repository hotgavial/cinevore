<script setup>
const props = defineProps({
  redactionGrade: {
    type: Number,
    default: 1
  }
});

function determinateClassForStar(index) {
        return index <= props.redactionGrade ? 'fa fa-star checked' : 'fa, fa-star'
    }
</script>

<template>
    <div class="redaction-grade">
        <h3>Note de la rédaction</h3>
        <div class="redaction-grade__stars">
            <span v-for="index in 10" :key="index" :class="determinateClassForStar(index)" />
        </div>
    </div>
</template>

<style scoped lang='scss'>
.redaction-grade {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__stars {
        font-size: 2rem;
        display: flex;
        justify-content: space-between;
        width: 60%;
    }

}
</style>
