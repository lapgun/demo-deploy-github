<script setup lang="ts">
import { Search } from 'lucide-vue-next'

interface Props {
  text: string
  required?: boolean
  className?: string
  subText?: string
  open?: boolean
  keyName: string
  onSearch: string
}

const props = defineProps<Props>()
</script>
<template>
  <div class="flex flex-col">
    <div class="rotate-[0.03deg] flex">
      <Input class="w-[150px]" />
      <div class="start-0 inset-y-0 flex items-center justify-center px-2 bg-indigo-100 mx-1">
        <Search class="size-4 text-muted-foreground" />
      </div>
      <div class="content-center text-large">{{ subText }}</div>
    </div>
    <ErrorMessage />
  </div>
</template>
