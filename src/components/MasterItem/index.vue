<script setup lang="ts">
import masterItemJson from '../../definition-page/master-item.json'

const onClear = () => {
  // TODO:
}
const onSearch = () => {
  // TODO:
}
const onAdd = () => {
  // TODO:
}
</script>

<template>
  <component :is="masterItemJson.type" :contents="masterItemJson.contents" />
</template>
