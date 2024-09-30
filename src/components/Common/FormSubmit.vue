<script setup lang="ts">
import { inject } from 'vue'
import type { BlockType } from '@/types/common'

interface Props {
  contents: BlockType[]
  onSubmit?: string
}

const props = defineProps<Props>()

const injectActions = inject<Function>('action') || {}

const actionSubmit = injectActions[props.onSubmit ?? ''] || (() => {})

const handleSubmit = (e: Event) => {
  e.preventDefault()
  actionSubmit()
}
</script>

<template>
  <form @submit="handleSubmit">
    <component v-for="(item, index) in contents" :is="item.type" :key="index" v-bind="item" />
  </form>
</template>
