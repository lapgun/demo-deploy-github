<script setup lang="ts">
import type { BlockType } from '../../../types/common'
import type { PropType } from 'vue'

defineProps({
  contents: {
    type: Object as PropType<BlockType[]>,
    required: true,
  },
})
</script>
<template>
  <div class="block-table">
    <component
      v-for="(item, index) in contents"
      :is="item.type"
      :key="index"
      v-bind="{
        ...item,
      }"
    />
  </div>
</template>
