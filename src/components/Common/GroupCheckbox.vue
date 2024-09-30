<script setup lang="ts">
import { inject } from 'vue'
import { type optionsType } from '@/types/common'
import { StateType } from '@/types/dataTypes'
import { useInjectedModel } from '@/utils/form'

interface Props {
  text: string
  required?: boolean
  options: optionsType[]
  keyName: string
}

const props = defineProps<Props>()

const injectStates = inject<StateType<any>>('state') || {}

const isStore = injectStates['isStore'] ?? false

const modelValue = useInjectedModel<string[]>(injectStates, props.keyName, isStore)

const onChange = (value: string) => {
  const currentValue = [...modelValue.value]
  const valueIndex = currentValue.indexOf(value)

  if (valueIndex > -1) {
    currentValue.splice(valueIndex, 1)
  } else {
    currentValue.push(value)
  }

  modelValue.value = currentValue
}
</script>
<template>
  <div class="flex mb-4">
    <LabelForm :text="text" :required="required"/>
    <div
      class="text-lg font-medium rotate-[0.03deg] mr-2"
      v-for="(option, index) in options"
      :key="index"
    >
      <Checkbox
        :id="'checkbox' + option.title"
        :checked="modelValue.includes(option.value)"
        @update:checked="onChange(option.value)"
      />
      <Label class="content-start ml-1 text-sm" :for="'checkbox' + option.title">{{
        option.title
      }}</Label>
    </div>
  </div>
</template>
