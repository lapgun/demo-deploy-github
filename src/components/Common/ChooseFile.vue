<script setup lang="ts">
import { cn } from '../../lib/utils'
import { ref } from 'vue'

defineProps({
  text: {
    type: String,
    required: true,
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: '',
  },
  textBtnChoose: {
    type: String,
    required: true,
    default: '',
  },
  textBtnLoad: {
    type: String,
    required: true,
    default: '',
  },
})

const file = ref<File | null>()

const onChooseFile = () => {
  const element: HTMLElement = document.getElementById('file') as HTMLElement
  element && element.click()
}

const onLoadFile = () => {
  // TODO:
}

const onFileChanged = ($event: Event) => {
  const target = $event.target as HTMLInputElement
  if (target && target.files) {
    file.value = target.files[0]
  }
}
</script>
<template>
  <div class="flex">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
      <span class="text-red-500" v-if="required">*</span>
    </div>
    <div class="text-sm rotate-[0.03deg]">
      <div class="grid grid-flow-row-dense grid-cols-12 space-x-2">
        <div class="col-span-9 flex">
          <Input :class="cn('hidden', className)" type="file" id="file" @change="onFileChanged" />
          <Button
            @click="onChooseFile"
            class="bg-white text-sky-700 hover:bg-wite border border-sky-700"
          >
            {{ textBtnChoose }}
          </Button>
          <div class="text-sm content-center ml-3">{{ file?.name }}</div>
        </div>
        <div class="col-span-3">
          <Button
            @click="onLoadFile"
            class="bg-white text-sky-700 hover:bg-wite border border-sky-700"
          >
            {{ textBtnLoad }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
