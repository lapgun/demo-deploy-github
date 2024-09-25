import { ref } from 'vue'
import { useLoading } from 'vue-loading-overlay'
import { defineStore } from 'pinia'

export const useLoadingStore = defineStore('loading', () => {
  const loading = ref(false)
  const $loading = useLoading({
    color: '#3B82F6',
  })
  const form = {
    abc: null
  }

  const submit = () => {
    const loader = $loading.show()
    setTimeout(() => {
      loader.hide()
    }, 5000)
  }

  return { loading, submit, $loading, form }
})
