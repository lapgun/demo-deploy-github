<script setup lang="ts">
import { configure } from 'vee-validate'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

configure({
  bails: false,
  validateOnChange: false,
  validateOnInput: false,
  validateOnModelUpdate: false,
  validateOnBlur: false,
})

type User = { name: string; email: string; password: string }

const props = defineProps({
  list: {
    type: Array as () => User[],
    default: () => [],
  },
  count: {
    type: Number,
    default: 1,
  },
})

const headers = [
  {
    label: 'データ種別',
    className: '',
  },
  {
    label: '項目コード',
    className: '',
  },
  {
    label: '項目名カナ',
    className: '',
  },
  {
    label: '項目名',
    className: '',
  },
]
</script>

<template>
  <div>
    <!-- Form bắt đầu -->
    <div class="border mx-10 my-10">
      <div class="content-table h-[500px] overflow-auto relative">
        <Table>
          <TableHeader class="sticky top-0 z-40">
            <TableRow class="hover:bg-indigo-100">
              <TableHead :class="item.className" v-for="(item, index) in headers" :key="index">
                {{ item.label }}
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody class="border border-black">
            <TableRow v-for="(item, index) in list" :key="index">
              <TableCell class="font-medium">
                {{ index + count }}
              </TableCell>
              <TableCell><FormInput v-model="item.email" /></TableCell>
              <TableCell><FormInput v-model="item.name" /></TableCell>
              <TableCell><FormInput v-model="item.password" /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  </div>
</template>

<style></style>
