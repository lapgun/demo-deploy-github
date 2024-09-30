<script setup lang="ts">
import { inject } from 'vue'
import { Checkbox } from '../../components/ui/checkbox'
import { useInjectedModel } from '@/utils/form'
import { StateType } from '@/types/dataTypes'

interface Props {
  text: string
  required?: boolean
  subText: string
  keyName: string
}

const props = defineProps<Props>()

const injectStates = inject<StateType<any>>('state') || {}

const isStore = injectStates['isStore'] ?? false

const modelValue = useInjectedModel<string>(injectStates, props.keyName, isStore)
</script>

<template>
  <div class="flex mb-4">
    <LabelForm :text="text" :required="required" />
    <div class="text-lg font-medium rotate-[0.03deg] mr-2">
      <Checkbox :id="'singleCheckbox' + subText" v-model="modelValue" />
      <Label class="content-start ml-1 text-sm" :for="'singleCheckbox' + subText">{{
        subText
      }}</Label>
    </div>
  </div>
</template>
