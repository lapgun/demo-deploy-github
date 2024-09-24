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
  <div class="group-btn py-5 grid grid-flow-row-dense grid-cols-12">
    <div class="group-btn-left col-span-6">
      <component
        v-for="(itemLeft, indexLeft) in contents.left"
        :is="itemLeft.type"
        :key="indexLeft"
        v-bind="{
          class: itemLeft.className,
        }"
      >
        {{ itemLeft.text }}
      </component>
    </div>
    <div class="group-btn-right col-span-6 text-end">
      <component
        v-for="(itemRight, indexRight) in contents.right"
        :is="itemRight.type"
        :key="indexRight"
        v-bind="{
          class: itemRight.className,
        }"
      >
        {{ itemRight.text }}
      </component>
    </div>
  </div>
</template>
