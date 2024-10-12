<script setup lang="ts">
import { watch } from 'vue'
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
  name: z.string().min(1, 'Name is required').max(5, '5 Name required').optional(),
  users: z.array(
    z.object({
      name: z.string().min(1, 'Name is required').max(5, '5 Name required').optional(),
      email: z.string().min(1, 'Email is required').max(5, '5 Email required').optional(),
    })
  ),
})
let count = 1

const initialData = {
  name: '',
  users: [
    {
      name: '',
      email: '',
    },
    {
      name: '',
      email: '',
    },
    {
      name: '',
      email: '',
    },
    {
      name: '',
      email: '',
    },
  ],
}

// Khởi tạo form với schema và giá trị ban đầu
const { handleSubmit, errors, values, ...ctx } = useForm({
  validationSchema: toTypedSchema(schema),
  initialValues: initialData,
})

const stageInitialValue = (ctx as any)?.stageInitialValue

const list = values

watch(
  errors,
  (value) => {
    console.log('errors', value)
  },
  {
    deep: true,
  }
)

watch(
  values,
  (value) => {
    console.log('values', value)
  },
  {
    deep: true,
  }
)

const quang = () => {
  stageInitialValue(
    'users',
    [
      ...values.users,
      {
        name: '',
        email: '',
      },
      {
        name: '',
        email: '',
      },
    ],
    true
  )
}

const onSubmit = handleSubmit((values, actions) => {
  console.log('Submitted values:', values)
})
</script>

<template>
  <div>
    <TableForm @onPush="quang" :list="list.users" />
    <Button @click="onSubmit">OK</Button>
  </div>
</template>

<style></style>
