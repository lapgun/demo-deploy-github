<script setup lang="ts">
import { ref } from 'vue'
import masterItemJson from '../../definition-page/master-item.json'

const open = ref(false)

const onOffDialog = (isOpen: boolean) => {
  open.value = isOpen
}
</script>

<template>
  <component
    :is="masterItemJson.type"
    :contents="masterItemJson.contents"
    :open="open"
    @onOffDialog="onOffDialog"
  />
</template>
