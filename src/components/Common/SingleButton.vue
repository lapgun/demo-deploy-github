<script setup lang="ts">
defineProps({
  text: {
    type: String,
  },
})
</script>
<template>
  <Button>
    {{ text }}
  </Button>
</template>
