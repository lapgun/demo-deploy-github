<script setup lang="ts">
interface Props {
  text: string
  required?: boolean
}

defineProps<Props>()
</script>
<template>
  <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1 h-8">
    {{ text }}
    <span class="text-red-500" v-if="required">*</span>
  </div>
</template>
