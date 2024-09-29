<script setup lang="ts">
import { inject } from 'vue'
import { cn } from '../../lib/utils'
import { useInjectedModel } from '@/hooks'
import { StateType } from '@/types/dataTypes'

interface Props {
  text: string
  required?: boolean
  className?: string
  subText?: string
  open?: boolean
  keyName: string
  onSearch: string
  isStore?: boolean
}

const props = defineProps<Props>()

const injectStates = inject<StateType<string[]>>('state')

const modelValue = useInjectedModel<string[]>(injectStates, props.keyName, props.isStore)

const onInput = (event, index) => {
  modelValue.value[index] = event.target.value
}
</script>
<template>
  <div class="flex mb-4">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
      <span class="text-red-500" v-if="required">*</span>
    </div>
    <div class="text-lg rotate-[0.03deg] flex">
      <Input
        :modelValue="modelValue[0]"
        @input="onInput($event, 0)"
        :class="cn('mr-4', className)"
      />
      ～
      <Input
        :modelValue="modelValue[1]"
        @input="onInput($event, 1)"
        :class="cn('mx-4', className)"
      />
    </div>
  </div>
</template>
