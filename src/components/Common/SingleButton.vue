<script setup lang="ts">
import { inject } from 'vue'

interface Props {
  text: string
  outLine: boolean
  onClick: string
}

const classOutLine = 'bg-white text-sky-700 hover:bg-wite border border-sky-700'

const props = defineProps<Props>()

const injectActions = inject<Function>('action') || {}

const actionClick = injectActions[props.onClick] || (() => {})
</script>
<template>
  <Button
    @click="actionClick"
    :class="{
      [classOutLine]: outLine,
    }"
  >
    {{ text }}
  </Button>
</template>
