<script setup lang="ts">
import { inject } from 'vue'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import type { optionsType } from '@/types/common'
import { StateType } from '@/types/dataTypes'
import { useInjectedModel } from '@/hooks'

interface Props {
  text: string
  required?: boolean
  options: optionsType[]
  keyName: string
  isStore?: boolean
}

const props = defineProps<Props>()

const injectStates = inject<StateType<any>>('state') || {}

const modelValue = useInjectedModel<any>(injectStates, props.keyName, props.isStore)
</script>

<template>
  <div class="flex">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
      <span class="text-red-500" v-if="required">*</span>
    </div>
    <RadioGroup class="flex" v-model="modelValue">
      <div class="flex items-center space-x-2 ml-4" v-for="(option, index) in options" :key="index">
        <RadioGroupItem :id="'radio' + option.title" :value="option.value" />
        <Label :for="'radio' + option.title">{{ option.title }}</Label>
      </div>
    </RadioGroup>
  </div>
</template>
