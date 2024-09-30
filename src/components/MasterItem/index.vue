<script setup lang="ts">
import masterItemJson from '@/definition-page/master-item.json'
import { provide } from 'vue'

import useConfigStore from '@/stores/masterItem'

const main = useConfigStore()

provide('state', {
  store: main.state,
  isStore: masterItemJson.isStore
})

</script>

<template>
  <component
    :is="masterItemJson.type"
    :contents="masterItemJson.contents"
  />
</template>
