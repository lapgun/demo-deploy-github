<script setup lang="ts">
import type { PropType } from 'vue'
import type { ListType } from '../../../types/common'

defineProps({
  contents: {
    type: Object as PropType<ListType[]>,
    required: true,
  },
})
</script>
<template>
  <component
    v-for="(item, index) in contents"
    :is="item.type"
    :contents="item.contents"
    :key="index"
  />
</template>
