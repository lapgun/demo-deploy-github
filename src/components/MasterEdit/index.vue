<script setup lang="ts">
import masterEditJson from '../../definition-page/master-edit.json'
</script>

<template>
  <component :is="masterEditJson.type" :contents="masterEditJson.contents" />
</template>
