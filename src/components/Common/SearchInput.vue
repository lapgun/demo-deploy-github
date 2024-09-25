<script setup lang="ts">
import { Search } from 'lucide-vue-next'

defineProps({
  text: {
    type: String,
    required: true,
  },
  required: {
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
  <div class="flex">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1 h-8">
      {{ text }}
      <span class="text-red-500" v-if="required">*</span>
    </div>
    <div class="flex flex-col">
      <div class="rotate-[0.03deg] flex">
        <Input :class="className" />
        <div class="start-0 inset-y-0 flex items-center justify-center px-2 bg-indigo-100 mx-1">
          <Search class="size-4 text-muted-foreground" @click="onSearch" />
        </div>
        <div class="content-center text-large">{{ subText }}</div>
      </div>
      <ErrorMessage />
    </div>
    <Dialog :open="true" />
  </div>
</template>
