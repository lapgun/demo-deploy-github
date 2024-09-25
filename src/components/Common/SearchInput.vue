<script setup lang="ts">
import { Search } from 'lucide-vue-next'

defineProps({
  text: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
  subText: {
    type: String,
    default: '',
  },
  open: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits(['onOffDialog'])

const onSearch = () => {
  emits('onOffDialog', true)
}
</script>
<template>
  <div class="flex mb-4">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
      <span class="text-red-500" v-if="isRequired">*</span>
    </div>
    <div class="rotate-[0.03deg] flex">
      <Input :class="className" />
      <div class="start-0 inset-y-0 flex items-center justify-center px-2 bg-indigo-100 mx-1">
        <Search class="size-4 text-muted-foreground" @click="onSearch" />
      </div>
      <div class="content-center text-large">{{ subText }}</div>
    </div>
  </div>
  <Dialog :open="true" />
</template>
