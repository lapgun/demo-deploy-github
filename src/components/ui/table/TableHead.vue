<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '../../../lib/utils'

const props = defineProps<{
  class?: HTMLAttributes['class']
}>()
</script>

<template>
  <!-- border border-gray -->
  <th
    :class="
      cn(
        'h-10 px-2 text-left align-middle font-medium [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5  hover:bg-indigo-100',
        props.class
      )
    "
  >
    <slot />
  </th>
</template>
