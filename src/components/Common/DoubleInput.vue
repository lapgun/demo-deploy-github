<script setup lang="ts">
import { cn } from '../../lib/utils'

defineProps({
  text: {
    type: String,
    required: true,
  },
  required: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div class="flex mb-4">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
      <span class="text-red-500" v-if="required">*</span>
    </div>
    <div class="text-lg rotate-[0.03deg] flex">
      <Input :class="cn('mr-4', className)" />
      ～
      <Input :class="cn('mx-4', className)" />
    </div>
  </div>
</template>
