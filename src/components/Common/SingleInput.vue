<script setup lang="ts">
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
})
</script>
<template>
  <div class="flex">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1 h-8">
      {{ text }}
      <span class="text-red-500" v-if="required">*</span>
    </div>
    <div class="flex flex-col">
      <div class="text-lg font-bold rotate-[0.03deg]">
        <Input :class="className" />
      </div>
      <ErrorMessage />
    </div>
  </div>
</template>
