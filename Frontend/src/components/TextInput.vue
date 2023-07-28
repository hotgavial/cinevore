<template>
  <input
    class="text-input"
    :style = "{width: width, height: height}"
    :value="modelValue"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>
defineProps(['modelValue', 'width', 'height', 'placeholder'])
defineEmits(['update:modelValue'])
</script>

<style>
</style>