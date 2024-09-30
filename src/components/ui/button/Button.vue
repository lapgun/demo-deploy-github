<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { Primitive, type PrimitiveProps } from 'radix-vue'
import { type ButtonVariants, buttonVariants } from '.'
import { cn } from '../../../lib/utils'

interface Props extends PrimitiveProps {
  variant?: ButtonVariants['variant']
  size?: ButtonVariants['size']
  class?: HTMLAttributes['class']
  outLine?: Boolean
}

const props = withDefaults(defineProps<Props>(), {
  as: 'button',
})

const classOutLine = 'bg-white text-sky-700 hover:bg-wite border border-sky-700'
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="{
      [cn(buttonVariants({ variant, size }), props.class)]: true,
      [classOutLine]: outLine,
    }"
  >
    <slot />
  </Primitive>
</template>
