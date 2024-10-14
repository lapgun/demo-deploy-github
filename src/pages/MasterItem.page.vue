<script setup lang="ts">
import { watch, ref } from 'vue'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import TableForm from './TableForm.vue'

import { configure } from 'vee-validate'

configure({
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
  validateOnBlur: false,
})

const schema = z.object({
  users: z.array(
    z.object({
      name: z.string().min(1, 'Name is required').max(5, '5 Name required').optional(),
      email: z.string().min(1, 'Email is required').max(5, '5 Email required').optional(),
      password: z.string().min(1, 'password is required').max(5, '5 password required').optional(),
    })
  ),
})

const initialData = {
  name: '',
  users: [],
}

// Khởi tạo form với schema và giá trị ban đầu
const { handleSubmit, errors, values, ...ctx } = useForm({
  validationSchema: toTypedSchema(schema),
  initialValues: initialData,
})

const stageInitialValue = (ctx as any)?.stageInitialValue

const list = ref(
  Array.from({ length: 1000 }, (_, index) => ({
    name: ``,
    email: ``,
    password: `password${index + 1}`,
  }))
)

watch(
  errors,
  (value) => {
    console.log('errors', value)
  },
  {
    deep: true,
  }
)

const quang = () => {
  stageInitialValue('users', list.value)
  onSubmit()
}

const onSubmit = handleSubmit((values, actions) => {
  console.log('Submitted values:', values)
})

const count = ref(0)

const onNext = () => {
  count.value = count.value + 100
}

const onBack = () => {
  count.value = count.value - 100
}

const onReset = () => {
  count.value = 0
}
</script>

<template>
  <div>
    <Button @click="onNext" class="mx-2">Next</Button>
    <Button @click="onBack" class="mx-2">Back</Button>
    <Button @click="onReset" class="mx-2">Reset</Button>
    <Button class="mx-2" @click="quang">OK</Button>
    <TableForm class="mt-5" :list="list.slice(count, count + 100)" :count="count" />
  </div>
</template>

<style></style>
