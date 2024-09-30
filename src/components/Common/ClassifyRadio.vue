<script setup lang="ts">
import { inject } from 'vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { optionsType } from '@/types/common'
import { StateType } from '@/types/dataTypes'
import { useInjectedModel } from '@/utils/form'

interface Props {
  text: string
  required?: boolean
  options: optionsType[]
  keyName: string
  hideLabelForm: boolean
}

const props = defineProps<Props>()

const injectStates = inject<StateType<any>>('state') || {}

const isStore = injectStates['isStore'] ?? false

const modelValue = useInjectedModel<any>(injectStates, props.keyName, isStore)
</script>

<template>
  <div class="flex mb-4">
    <LabelForm v-if="!hideLabelForm" :text="text" :required="required"/>
    <RadioGroup class="flex" v-model="modelValue">
      <div class="flex items-center space-x-2 ml-4" v-for="(option, index) in options" :key="index">
        <RadioGroupItem :id="'radio' + option.title" :value="option.value" />
        <Label :for="'radio' + option.title">{{ option.title }}</Label>
      </div>
    </RadioGroup>
  </div>
</template>
