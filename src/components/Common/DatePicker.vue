<script setup lang="ts">
import { inject, computed } from 'vue'
import { DateFormatter, getLocalTimeZone, CalendarDate } from '@internationalized/date'
import { Calendar as CalendarIcon } from 'lucide-vue-next'
import { Calendar } from '@/components/ui/calendar'
import { Button } from '@/components/ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'
import { StateType } from '@/types/dataTypes'
import { useInjectedModel } from '@/hooks'

interface Props {
  text: string
  required?: boolean
  className?: string
  subText?: string
  open?: boolean
  keyName: string
  isStore?: boolean
}

const props = defineProps<Props>()

const injectStates = inject<StateType<any>>('state') || {}

const dateFormatter = new DateFormatter('en-GB')

const modelValue = useInjectedModel<string>(injectStates, props.keyName, props.isStore)

const parseDateString = (dateString: string): CalendarDate | undefined => {
  const [day, month, year] = dateString.split('/').map(Number)
  return day && month && year ? new CalendarDate(year, month, day) : undefined
}

const formatCalendarDate = (date: CalendarDate | undefined): string =>
  date ? dateFormatter.format(date.toDate(getLocalTimeZone())) : ''

const onChange = (value) => {
  modelValue.value = formatCalendarDate(value)
}
</script>

<template>
  <div class="flex">
    <div class="mr-4 content-center w-[150px] bg-indigo-100 pl-1 h-8">
      {{ text }}
      <span class="text-red-500" v-if="required">*</span>
    </div>
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
