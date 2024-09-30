<script setup lang="ts">
import { Checkbox } from '../../components/ui/checkbox'
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: null,
  },
  label: {
    type: String,
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
  <div class="text-lg font-medium rotate-[0.03deg] mr-2">
    <Checkbox v-model:modelValue="computedValue" :id="'singleCheckbox' + label" />
    <Label class="content-start ml-1 text-sm" :for="'singleCheckbox' + label">{{ label }}</Label>
  </div>
</template>
