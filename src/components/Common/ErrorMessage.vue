<script setup lang="ts">
defineProps({
  message: {
    type: String,
    default: '',
  },
})
</script>
<template>
  <div
    class="font-medium text-destructive text-red-700 h-4"
    style="font-size: 10px; padding-top: 2px"
  >
    {{ message }}
  </div>
</template>
