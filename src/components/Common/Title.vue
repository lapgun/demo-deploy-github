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
})
</script>
<template>
  <div class="flex border-b border-inherit mb-5">
    <div class="bg-sky-700 mr-4 w-4"></div>
    <div v-if="required" class="text-lg rotate-[0.03deg]">
      （<span class="text-red-500">*</span> {{ text }}）
    </div>
    <div v-else class="text-lg font-semibold rotate-[0.03deg]">
      {{ text }}
    </div>
  </div>
</template>
