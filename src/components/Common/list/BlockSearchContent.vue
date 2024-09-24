<script setup lang="ts">
import type { BlockContentType } from '../../../types/common'
import type { PropType } from 'vue'

defineProps({
  contents: {
    type: Object as PropType<BlockContentType>,
    required: true,
  },
})
</script>
<template>
  <div class="content grid grid-flow-row-dense grid-cols-12">
    <div class="content-left col-span-6">
      <component
        v-for="(itemLeft, indexLeft) in contents.left"
        :is="itemLeft.type"
        :key="indexLeft"
        v-bind="{
          ...itemLeft,
        }"
      />
    </div>
    <div class="content-right col-span-6">
      <component
        v-for="(itemRight, indexRight) in contents.right"
        :is="itemRight.type"
        :key="indexRight"
        v-bind="{
          ...itemRight,
        }"
      />
    </div>
  </div>
</template>
