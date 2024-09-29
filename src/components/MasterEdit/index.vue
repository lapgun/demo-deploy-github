<script setup lang="ts">
import masterEditJson from '@/definition-page/master-edit.json'
import { provide, ref } from 'vue'
import useConfigStore from '@/stores/counter'

const main = useConfigStore()
const passCheck = ref([1])
const email = ref('asdnsj')
const dateTime = ref('12/12/2024')

provide('state', {
  store: main.config,
  passCheck,
  email,
  dateTime,
})

provide('action', {})
</script>

<template>
  <component :is="masterEditJson.type" :contents="masterEditJson.contents" />
</template>
