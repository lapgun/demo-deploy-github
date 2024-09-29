<script setup lang="ts">
import { inject } from 'vue'
import { Search } from 'lucide-vue-next'
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

const injectStates = inject<StateType<string>>('state')

const injectActions = inject<Function>('action') || {}

const modelValue = useInjectedModel<string>(injectStates, props.keyName, props.isStore)

const actionSearch = injectActions[props.onSearch] || (() => {})

const onSearch = () => {
  actionSearch()
}
</script>
<template>
  <div class="flex">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1 h-8">
      {{ text }}
      <span class="text-red-500" v-if="required">*</span>
    </div>
    <div class="flex flex-col">
      <div class="rotate-[0.03deg] flex">
        <Input :class="className" v-model="modelValue" />
        <div class="start-0 inset-y-0 flex items-center justify-center px-2 bg-indigo-100 mx-1">
          <Search class="size-4 text-muted-foreground" @click="onSearch" />
        </div>
        <div class="content-center text-large">{{ subText }}</div>
      </div>
      <ErrorMessage />
    </div>
  </div>
</template>
