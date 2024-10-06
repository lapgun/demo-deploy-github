<script setup lang="ts">
import { computed } from 'vue'
import dayjs from '@/plugins/dayjs-config'

const props = defineProps({
  text: String,
  required: Boolean,
  subText: String,
  modelValue: {
    type: String,
    default: null,
  },
  className: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => new Date(props.modelValue),
  set: (value) => {
    emit('update:modelValue', dayjs(value).format('YYYY/MM/DD'))
  },
})
</script>

<template>
  <div class="flex flex-col">
    <div class="text-lg rotate-[0.03deg]">
      <DatePicker
        v-model:value="computedValue"
        placeholder="YYYY/MM/DD"
        :clearable="false"
        format="YYYY/MM/DD"
      />
    </div>
    <ErrorMessage />
  </div>
</template>
