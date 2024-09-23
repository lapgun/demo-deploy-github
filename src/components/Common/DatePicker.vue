<script setup lang="ts">
import { ref } from 'vue'
import { DateFormatter, type DateValue, getLocalTimeZone } from '@internationalized/date'

import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { Calendar } from '../../components/ui/calendar'
import { Button } from '../../components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../../components/ui/popover'
import { cn } from '../../lib/utils'

defineProps({
  text: {
    type: String,
    required: true,
  },
  isRequired: {
    type: Boolean,
    default: false,
  },
})

const df = new DateFormatter('en-US', {
  dateStyle: 'long',
})

const value = ref<DateValue>()
</script>

<template>
  <div class="flex mb-4">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1">
      {{ text }}
      <span class="text-red-500" v-if="isRequired">*</span>
    </div>
    <div class="text-lg font-bold rotate-[0.03deg]">
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            :class="
              cn('w-[180px] justify-start text-left font-normal', !value && 'text-muted-foreground')
            "
          >
            <CalendarIcon class="mr-2 h-4 w-4" />
            {{ value ? df.format(value.toDate(getLocalTimeZone())) : '2023/12/01' }}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar v-model="value" initial-focus />
        </PopoverContent>
      </Popover>
    </div>
  </div>
</template>
