<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <!-- [&_tr]:border-b -->
  <thead :class="cn('bg-indigo-100 hover:bg-indigo-100', props.class)">
    <slot />
  </thead>
</template>
