<script setup lang="ts">
import type { PropType } from 'vue'
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group'
import type { optionsType } from '../../types/common'

defineProps({
  options: {
    type: Object as PropType<optionsType[]>,
    default: () => {},
  },
})
</script>

<template>
  <RadioGroup default-value="1" class="flex">
    <div class="flex items-center space-x-2 ml-4" v-for="(option, index) in options" :key="index">
      <RadioGroupItem :id="option.title" :value="option.value" />
      <Label :for="option.title">{{ option.title }}</Label>
    </div>
  </RadioGroup>
</template>
