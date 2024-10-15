<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import TableUnitPrice from './TableUnitPrice.vue'

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

const pagination = reactive(<PaginationData>{
  page: 1,
  totalPage: 2,
  pageSize: 50,
  totalRecord: 80,
  startIndex: 0,
  endIndex: 0,
})

const listSearch = ref<RowData[]>(
  Array.from({ length: 80 }, (_, index) => ({
    isDelete: false,
    itemCode: `code${index}`,
    itemName: `name${index}`,
    price: `${index}`,
  }))
)

const listAdd = ref<RowData[]>(
  Array.from({ length: 250 }, (_, index) => ({
    isDelete: false,
    itemCode: `Add code${index}`,
    itemName: `Add name${index}`,
    price: `${index}`,
  }))
)

const getRowData = computed<RowData[]>(() => {
  const { page, pageSize, totalPage, totalRecord } = pagination
  const start = (page - 1) * pageSize
  const end = page * pageSize

  if (page < totalPage) return listSearch.value.slice(start, end)

  if (pagination.page === pagination.totalPage) {
    const remainingSearch = listSearch.value.slice(start, totalRecord)
    const remainingAdd = listAdd.value.slice(0, pageSize - remainingSearch.length)

    return [...remainingSearch, ...remainingAdd]
  }

  const remainingSearch = totalPage * pageSize - totalRecord
  const startAdd = start - listSearch.value.length + remainingSearch

  return listAdd.value.slice(startAdd, startAdd + pageSize)
})

const getPaginationData = computed<PaginationData>(() => {
  const { page, totalRecord, pageSize } = pagination
  const totalRecordAll = totalRecord + listAdd.value.length
  return {
    page: pagination.page,
    totalPage: Math.ceil(totalRecordAll / pageSize),
    pageSize: pageSize,
    totalRecord: totalRecordAll,
    startIndex: (page - 1) * pagination.pageSize + 1,
    endIndex: Math.min(page * pageSize, totalRecordAll),
  }
})

const onChangePage = (page: number) => {
  if (page > 0) {
    pagination.page = page
  }
}
</script>

<template>
  <div>
    <div class="my-5">
      <Title text="検索結果" />
      <TableUnitPrice
        :pagination="getPaginationData"
        :rowsData="getRowData"
        @onChangePage="onChangePage"
      />
    </div>
    <Footer />
  </div>
</template>
