<script setup>
const props = defineProps({
  spectatorsAverageGrade: {
    type: Number,
    default: null
  }
});

function colorGrade() {
  if (props.spectatorsAverageGrade) {
      if (props.spectatorsAverageGrade >= 7) {
          return 'greenyellow';
      } if (props.spectatorsAverageGrade >= 6) {
          return 'yellow';
      } if (props.spectatorsAverageGrade >= 5.0) {
          return 'orange';
      } 
          return 'red';
  } 
      return 'grey';
}

function gradeBorder() {
  if (props.spectatorsAverageGrade) {
      if (props.spectatorsAverageGrade >= 7) {
          return 'green 0.4rem solid';
      } if (props.spectatorsAverageGrade >= 6) {
          return 'ykhaki 0.4rem solid';
      } if (props.spectatorsAverageGrade >= 5.0) {
          return 'coral 0.4rem solid';
      } 
          return 'firebrick 0.4rem solid';
  } 
      return 'grey 0.4rem solid';
}

</script>

<template>
<div class='spectators-grade'>
    <div>Note Moyenne des spectateurs</div>
    <div class="spectators-grade__grade" :style="{ color: colorGrade(), border: gradeBorder() }">{{ props.spectatorsAverageGrade || '-' }}</div>
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