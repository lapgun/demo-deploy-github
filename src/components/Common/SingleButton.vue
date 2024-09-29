<script setup lang="ts">
import { inject } from 'vue'

interface Props {
  text: string
  onClick: string
}

const props = defineProps<Props>()

const injectActions = inject<Function>('action') || {}

const actionSearch = injectActions[props.onClick] || (() => {})

const onClick = () => {
  actionSearch()
}
</script>
<template>
  <Button @click="onClick">
    {{ text }}
  </Button>
</template>
