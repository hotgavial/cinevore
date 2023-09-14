<template>
<div class="textInput">
  <label v-if="props.label">
    {{ props.label }}
  </label>
  <input
    class="text-input"
    :style = "{width: props.width, height: props.height}"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</div>
  
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: '100%'
  },
  heigth: {
    type: String,
    default: '100%'
  },
  placeholder: {
    type: String,
    default: ''
  },
  label: {
    type: String,
    default: null
  }
});
defineEmits(['update:modelValue'])
</script>

<style>
.textInput {
  display: flex;
  flex-direction: column;
  text-align: center;
}
</style>