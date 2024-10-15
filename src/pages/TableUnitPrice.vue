<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { range } from '@/utils'
import { defineProps, defineEmits, watch } from 'vue'

interface PaginationData {
  page: number
  pageSize: number
  totalPage: number
  totalRecord: number
  startIndex: number
  endIndex: number
}

interface RowData {
  isDelete: boolean
  itemCode: string
  itemName: string
  price: string
}

const props = defineProps<{
  rowsData: RowData[]
  pagination: PaginationData
}>()

const emits = defineEmits(['onChangePage'])

const onChangePage = (page: number) => {
  emits('onChangePage', page)
}

const onPrev = () => {
  if (props.pagination.page > 1) {
    onChangePage(props.pagination.page - 1)
  }
}

watch(
  props.rowsData,
  (value) => {
    console.log('value', value[0])
  },
  {
    deep: true,
  }
)

const onNext = () => {
  onChangePage(props.pagination.page + 1)
}

const headers = [
  { label: '削除', className: '', keyValue: 'isDelete' },
  { label: '項目コード', className: '', keyValue: 'itemCode' },
  { label: '項目名', className: '', keyValue: 'itemName' },
  { label: '単価', className: '', keyValue: 'price' },
]
</script>

<template>
  <div>
    <div class="content-header flex pb-5 grid grid-flow-row-dense grid-cols-12">
      <div class="total-item col-span-4 content-center">
        {{ `${pagination.startIndex} - ${pagination.endIndex} 件(全 ${pagination.totalRecord}件)` }}
      </div>
      <div class="group-btn col-span-4 justify-center gap-2 flex">
        <Button @click="onPrev" :disabled="pagination.page === 1">prev</Button>
        <Button @click="onNext" :disabled="pagination.page === pagination.totalPage">next</Button>
      </div>
    </div>

    <div class="content-table max-h-[378px] overflow-auto border-b">
      <Table>
        <colgroup class="w-[4%]" />
        <colgroup class="w-[12%]" />
        <colgroup class="w-[24%]" />
        <colgroup class="w-[10%]" />

        <TableHeader class="top-0 sticky z-10">
          <TableRow class="hover:bg-indigo-100">
            <TableHead v-for="(item, index) in headers" :key="index" class="text-left">
              {{ item.label }}
            </TableHead>
            <TableHead v-for="(item, index) in headers" :key="index" class="text-left">
              {{ item.label }}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody class="border">
          <TableRow
            v-for="(indexRow, index) in range(0, Math.min(pagination.pageSize, rowsData.length), 2)"
            :key="index"
            class="font-medium"
          >
            <TableCell>
              <div class="flex justify-center items-center">
                <FormCheckbox v-model="rowsData[indexRow].isDelete" />
              </div>
            </TableCell>
            <TableCell>
              <FormInput v-model="rowsData[indexRow].itemCode" />
            </TableCell>
            <TableCell>
              {{ rowsData[indexRow].itemName }}
            </TableCell>
            <TableCell>
              <FormInput v-model="rowsData[indexRow].price" />
            </TableCell>

            <template v-if="indexRow + 1 < rowsData.length">
              <TableCell>
                <div class="flex justify-center items-center">
                  <FormCheckbox v-model="rowsData[indexRow + 1].isDelete" />
                </div>
              </TableCell>
              <TableCell>
                <FormInput v-model="rowsData[indexRow + 1].itemCode" />
              </TableCell>
              <TableCell>
                {{ rowsData[indexRow + 1].itemName }}
              </TableCell>
              <TableCell>
                <FormInput v-model="rowsData[indexRow + 1].price" />
              </TableCell>
            </template>

            <template v-else>
              <TableCell v-for="num in range(0, 4)" :key="num"></TableCell>
            </template>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
</template>
