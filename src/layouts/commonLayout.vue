<script setup lang="ts">
import { onMounted } from 'vue'
import { useLoadingStore } from '../stores/loading'
const { loading, $loading } = useLoadingStore()
onMounted(() => {
  const submit = () => {
    const loader = $loading.show()
    setTimeout(() => {
      loader.hide()
    }, 5000)
  }
  submit()
})
</script>

<template>
  <div class="bg-white text-black text-sm/[14px] font-normal mx-auto">
    <div class="container relative pt-5">
      <section>
        <div class="overflow-hidden rounded-[0.5rem] border bg-background shadow">
          <div class="px-[1.5rem] pb-16 pt-14 block">
            <slot />
          </div>
        </div>
      </section>
    </div>
    <loading v-model:active="loading"></loading>
  </div>
</template>
