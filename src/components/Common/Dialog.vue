<script setup lang="ts">
import { computed } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../../components/ui/dialog'
import TableSearch from './TableSearch.vue'

defineProps({
  onSearch: {
    type: Function,
    default: () => {},
  },
  open: {
    type: Boolean,
    default: false,
  },
})

const isOpen = computed(() => {
  return false
})
</script>

<template>
  <Dialog v-model:open="isOpen">
    <DialogContent>
      <DialogHeader>
        <DialogTitle>表社</DialogTitle>
        <TableSearch />
      </DialogHeader>
    </DialogContent>
  </Dialog>
</template>
