<script setup lang="ts">
import { type optionsType } from '@/types/common'
import { type PropType } from 'vue'

defineProps({
  modelValue: {
    type: Array,
    default: null,
  },
  options: {
    type: Object as PropType<optionsType[]>,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const onChange = (value: any) => {
  emit('update:modelValue', value)
}
</script>
<template>
  <div
    class="text-lg font-medium rotate-[0.03deg] mr-2"
    v-for="(option, index) in options"
    :key="index"
  >
    <!-- :checked="modelValue.includes(option.value)" -->
    <Checkbox :id="'checkbox' + option.title" @update:checked="onChange(option.value)" />
    <Label class="content-start ml-1 text-sm" :for="'checkbox' + option.title">{{
      option.title
    }}</Label>
  </div>
</template>
