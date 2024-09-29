import { computed } from 'vue'
import { StateType } from '@/types/dataTypes'

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
