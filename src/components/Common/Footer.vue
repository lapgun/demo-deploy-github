<script setup lang="ts">
interface Props {}

const props = defineProps<Props>()
</script>
<template>
  <div class="border-b border-inherit mb-5"></div>
  <div class="flex justify-between items-center">
    <div>
      <SingleButton text="実行" />
    </div>
    <div>
      <SingleButton text="前へ" outLine class="mr-4" />
      <SingleButton text="次へ" outLine />
    </div>
    <div>
      <SingleButton text="戻る" outLine />
    </div>
  </div>
</template>
