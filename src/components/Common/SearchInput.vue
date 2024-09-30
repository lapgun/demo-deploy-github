<script setup lang="ts">
import { inject } from 'vue'
import { Search } from 'lucide-vue-next'
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

const injectStates = inject<StateType<string>>('state')

const injectActions = inject<Function>('action') || {}

const isStore = injectStates['isStore'] ?? false

const modelValue = useInjectedModel<string>(injectStates, props.keyName, isStore)

const actionSearch = injectActions[props.onSearch] || (() => {})

</script>
<template>
  <div class="flex">
    <LabelForm :text="text" :required="required"/>
    <div class="flex flex-col">
      <div class="rotate-[0.03deg] flex">
        <Input :class="className" v-model="modelValue" />
        <div class="start-0 inset-y-0 flex items-center justify-center px-2 bg-indigo-100 mx-1">
          <Search class="size-4 text-muted-foreground" @click="actionSearch" />
        </div>
        <div class="content-center text-large">{{ subText }}</div>
      </div>
      <ErrorMessage />
    </div>
  </div>
</template>
