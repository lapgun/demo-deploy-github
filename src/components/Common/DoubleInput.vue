<script setup lang="ts">
import { inject, onMounted } from 'vue'
import { cn } from '@/lib/utils'
import { useInjectedModel } from '@/utils/form'
import { StateType } from '@/types/dataTypes'

interface Props {
  text: string
  required?: boolean
  className?: string
  subText?: string
  open?: boolean
  keyName: string
  onSearch: string
}

const props = defineProps<Props>()

const injectStates = inject<StateType<string[]>>('state')

const isStore = injectStates['isStore'] ?? false

const modelValue = useInjectedModel<string[]>(injectStates, props.keyName, isStore)

const onInput = (event, index) => {
  modelValue.value[index] = event.target.value
}
</script>
<template>
  <div class="flex mb-4">
    <LabelForm :text="text" :required="required"/>
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
