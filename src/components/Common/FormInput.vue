<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: null,
  },
  className: {
    type: String,
    default: 'w-[150px]',
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
  <div class="flex flex-col">
    <div class="text-lg font-bold rotate-[0.03deg]">
      <Input :class="className" v-model="computedValue" />
    </div>
    <!-- <ErrorMessage /> -->
  </div>
</template>
