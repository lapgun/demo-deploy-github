<script setup lang="ts">
import type { PropType } from 'vue'
import { type optionsType } from '../../types/common'

defineProps({
  text: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  options: {
    type: Object as PropType<optionsType[]>,
    default: () => {},
  },
})
</script>
<template>
  <div class="flex mb-4">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
      <span class="text-red-500" v-if="isRequired">*</span>
    </div>
    <div
      class="text-lg font-medium rotate-[0.03deg] mr-2"
      v-for="(option, index) in options"
      :key="index"
    >
      <Checkbox /><span class="content-start ml-1 text-sm">{{ option.title }}</span>
    </div>
  </div>
</template>
