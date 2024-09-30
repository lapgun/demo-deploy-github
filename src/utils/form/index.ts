import { computed } from 'vue'
import { StateType } from '@/types/dataTypes'
import {
  ISO_SLASH_FORMAT,
  ISO_DASH_FORMAT,
  EU_SLASH_FORMAT,
  EU_DASH_FORMAT,
} from '@/constants/formatDate'

export const useInjectedModel = <T>(injects: StateType<T>, keyName: string, isStore: boolean) => {
  return computed<T>({
    get: () => {
      if (isStore) {
        return injects['store']?.[keyName] ?? null
      }
      return injects[keyName]?.value ?? null
    },
    set: (value) => {
      if (isStore) {
        injects['store'][keyName] = value
      } else {
        injects[keyName].value = value
      }
    },
  })
}

export const formatDateString = (
  date: string,
  formatCurrent: string,
  formatConvert: string
): string => {
  let year: string, month: string, day: string

  switch (formatCurrent) {
    case ISO_SLASH_FORMAT:
    case ISO_DASH_FORMAT:
      ;[year, month, day] = date.split(formatCurrent === ISO_SLASH_FORMAT ? '/' : '-')
      break
    case EU_SLASH_FORMAT:
    case EU_DASH_FORMAT:
      ;[day, month, year] = date.split(formatCurrent === EU_SLASH_FORMAT ? '/' : '-')
      break
    default:
      throw new Error('Unsupported formatCurrent')
  }

  switch (formatConvert) {
    case ISO_SLASH_FORMAT:
      return `${year}/${month}/${day}`
    case ISO_DASH_FORMAT:
      return `${year}-${month}-${day}`
    case EU_SLASH_FORMAT:
      return `${day}/${month}/${year}`
    case EU_DASH_FORMAT:
      return `${day}-${month}-${year}`
    default:
      throw new Error('Unsupported formatConvert')
  }
}
