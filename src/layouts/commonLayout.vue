<script setup lang="ts">
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
  </div>
</template>
