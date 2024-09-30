<script setup lang="ts">
import { inject } from 'vue'
import { DateFormatter, getLocalTimeZone, CalendarDate } from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { StateType } from '@/types/dataTypes'
import { useInjectedModel, formatDateString } from '@/utils/form'
import { ISO_SLASH_FORMAT, EU_SLASH_FORMAT } from '@/constants/formatDate'

interface Props {
  text: string
  required?: boolean
  className?: string
  subText?: string
  open?: boolean
  keyName: string
}

const props = defineProps<Props>()

const injectStates = inject<StateType<any>>('state') || {}

const isStore = injectStates['isStore'] ?? false

const dateFormatter = new DateFormatter('en-GB')

const modelValue = useInjectedModel<string>(injectStates, props.keyName, isStore)

const parseDateString = (dateString: string): CalendarDate | undefined => {
  const [year, month, day] = dateString.split('/').map(Number) // YYYY/MM/DD
  return day && month && year ? new CalendarDate(year, month, day) : undefined
}

const formatCalendarDate = (date: CalendarDate | undefined): string =>
  date ? dateFormatter.format(date.toDate(getLocalTimeZone())) : ''

const onChange = (value) => {
  modelValue.value = formatDateString(formatCalendarDate(value), EU_SLASH_FORMAT, ISO_SLASH_FORMAT)
}
</script>

<template>
  <div class="flex">
    <LabelForm :text="text" :required="required" />
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
              :modelValue="parseDateString(modelValue)"
              initial-focus
            />
          </PopoverContent>
        </Popover>
      </div>
      <ErrorMessage />
    </div>
  </div>
</template>
