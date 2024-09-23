<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>
<template>
  <div class="flex border-b border-inherit mb-5">
    <div class="bg-sky-700 mr-4 w-4"></div>
    <div class="text-lg font-semibold rotate-[0.03deg]">
      {{ text }}
    </div>
  </div>
</template>
