<script setup lang="ts">
import { configure } from 'vee-validate'

configure({
  bails: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
  validateOnBlur: false,
})

type User = { name: string; email: string }

const props = defineProps({
  list: {
    type: Array as () => User[],
    default: () => [],
  },
})

const emit = defineEmits(['onPush'])

const onPush = () => {
  emit('onPush')
}
</script>

<template>
  <div>
    <!-- Form bắt đầu -->
    <Button @click="onPush">12313</Button>
    <div class="border mx-10 my-10">
      <div class="InputGroup">
        {{ list.length }}
        <div v-for="(item, index) in list" :key="index">
          <FormInput v-model="item.name" type="text" />
          <FormInput v-model="item.email" type="text" />
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
