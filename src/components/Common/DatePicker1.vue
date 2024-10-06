<script setup lang="ts">
import { computed } from 'vue'
import { DateFormatter, getLocalTimeZone, CalendarDate } from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { formatDateString } from '@/utils/form'
import { ISO_SLASH_FORMAT, EU_SLASH_FORMAT } from '@/constants/formatDate'

const props = defineProps({
  text: String,
  required: Boolean,
  subText: String,
  modelValue: {
    type: String,
    default: null,
  },
  className: {
    type: String,
    default: '',
  },
})

const emit = defineEmits(['update:modelValue'])

const computedValue = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  },
})

const dateFormatter = new DateFormatter('en-GB')

const parseDateString = (dateString: string): CalendarDate | undefined => {
  const [year, month, day] = dateString.split('/').map(Number) // YYYY/MM/DD
  return day && month && year ? new CalendarDate(year, month, day) : undefined
}

const formatCalendarDate = (date: CalendarDate | undefined): string =>
  date ? dateFormatter.format(date.toDate(getLocalTimeZone())) : ''

const onChange = (value) => {
  if (!value) return
  computedValue.value = formatDateString(
    formatCalendarDate(value),
    EU_SLASH_FORMAT,
    ISO_SLASH_FORMAT
  )
}
</script>

<template>
  <div class="flex flex-col">
    <div class="text-lg font-bold rotate-[0.03deg]">
      <Popover>
        <PopoverTrigger as-child>
          <Button
            variant="outline"
            :class="
              cn(
                'w-[180px] justify-start text-left font-normal',
                !modelValue && 'text-muted-foreground'
              )
            "
          >
            <CalendarIcon class="mr-2 h-4 w-4" />
            {{ modelValue || '01/12/2023' }}
          </Button>
        </PopoverTrigger>
        <PopoverContent class="w-auto p-0">
          <Calendar
            @update:model-value="onChange"
            :modelValue="parseDateString(computedValue)"
            initial-focus
          />
        </PopoverContent>
      </Popover>
    </div>
    <ErrorMessage />
  </div>
</template>
