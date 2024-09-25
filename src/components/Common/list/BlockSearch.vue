<script setup lang="ts">
import type { BlockType } from 'types/common'
import type { PropType } from 'vue'

defineProps({
  contents: {
    type: Object as PropType<BlockType[]>,
    required: true,
  },
  open: {
    type: Boolean,
    default: false,
  },
})
const emits = defineEmits(['onOffDialog'])

const onOffDialog = (isOpen: boolean) => {
  emits('onOffDialog', isOpen)
}
</script>
<template>
  <div class="block-search">
    <component
      v-for="(item, index) in contents"
      :is="item.type"
      :key="index"
      v-bind="{
        ...item,
        open,
      }"
      @onOffDialog="onOffDialog"
    />
  </div>
</template>
