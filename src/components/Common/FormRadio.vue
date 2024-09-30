<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { optionsType } from '@/types/common'
import { type PropType, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  options: {
    type: Object as PropType<optionsType[]>,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})
</script>

<template>
  <RadioGroup v-model="computedValue" class="flex">
    <div class="flex items-center space-x-2 ml-4" v-for="(option, index) in options" :key="index">
      <RadioGroupItem :id="'radio' + option.title" :value="option.value" />
      <Label :for="'radio' + option.title">{{ option.title }}</Label>
    </div>
  </RadioGroup>
</template>
