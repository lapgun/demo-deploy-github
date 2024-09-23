<script setup lang="ts">
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
})
</script>
<template>
  <div class="flex mb-4">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
      <span class="text-red-500" v-if="isRequired">*</span>
    </div>
    <div class="text-lg font-bold rotate-[0.03deg]">
      <Input :class="className" />
    </div>
  </div>
</template>
