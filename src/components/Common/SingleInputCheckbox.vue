import ClassifyRadio from 'components/Common/ClassifyRadio.vue';
<script setup lang="ts">
import type { optionsType } from '../../types/common'
import type { PropType } from 'vue'

defineProps({
  text: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: '',
  },
  options: {
    type: Object as PropType<optionsType[]>,
    default: () => {},
  },
})
</script>
<template>
  <div class="flex">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
    </div>
    <div class="text-lg font-medium rotate-[0.03deg] flex">
      <Input :class="className" />
      <ClassifyRadio :options="options" />
    </div>
  </div>
</template>
