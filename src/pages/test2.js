<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useUnitPriceStore } from '@/stores/unitPrice'
import { OPTIONS_APPROVE } from '@/constants/common'
import TableUnitPrice from './TableUnitPrice.vue'
import { PAGINATION } from '@/constants/unitPrice'

const { unitPriceSearch } = useUnitPriceStore()

const optionApprovalCategory = ref(OPTIONS_APPROVE)

const pagination = reactive({
  page: 1,
  totalPage: 1,
  pageSize: 50,
  totalRecord: 49,
  startIndex: 0,
  endIndex: 0,
})

const listSearch = ref(
  Array.from({ length: 49 }, (_, index) => ({
    isDelete: false,
    itemCode: `code${index}`,
    itemName: `name${index}`,
    price: `${index}`,
  }))
)
const listAdd = ref(
  Array.from({ length: 200 }, (_, index) => ({
    isDelete: false,
    itemCode: `Add code${index}`,
    itemName: `Add name${index}`,
    price: `${index}`,
  }))
)

const getRowData = (page: number, pageSize: number): object[] => {
  const start = (page - 1) * pageSize
  const end = page * pageSize
  const spaceSearchEnd = (pagination.totalPage - 1) * pagination.pageSize - pagination.totalRecord
  if (pagination.page < pagination.totalPage) {
    return listSearch.value.slice(start, end)
  }
  if (pagination.page === pagination.totalPage) {
    return listSearch.value
      .slice(start, pagination.totalPage - 1)
      .concat(listAdd.value.slice(0, spaceSearchEnd))
  }
  const startAdd = start - listSearch.value.length + spaceSearchEnd
  console.log('startAdd', startAdd)
  return listAdd.value.slice(startAdd, startAdd + pageSize)
}

const onChangePage = () => {
  if (pagination.page > pagination.totalPage) return
}
</script>
<template>
  <div>
    <div>
      <Title text="検索条件入力" />
      <div class="content grid grid-flow-row-dense grid-cols-12">
        <div class="content-left col-span-6">
          <FormLabel text="適用開始日" :required="true">
            <DatePicker v-model="unitPriceSearch.startDate" />
          </FormLabel>
          <FormLabel text="顧客コード">
            <SearchInputGroup v-model="unitPriceSearch.startCustomerCode" />
          </FormLabel>
          <FormLabel text="項目種別 ">
            <SearchInput v-model="unitPriceSearch.endCustomerCode" />
          </FormLabel>
        </div>
        <div class="content-right col-span-6">
          <FormLabel class="items-center" text="承認区分">
            <FormCheckboxGroup
              :options="optionApprovalCategory"
              v-model="unitPriceSearch.approvalCategory"
            />
          </FormLabel>
          <FormLabel class="items-center" text="削除区分">
            <FormCheckbox label="削除" v-model="unitPriceSearch.deletionFlag" />
          </FormLabel>
          <FormLabel text="項目コード">
            <div class="flex justify-between items-center flex-1">
              <div class="flex items-center">
                <FormInput className="mr-4 w-[100px]" />
                ～
                <FormInput className="ml-4 w-[100px]" />
              </div>
              <div class="flex text-end">
                <Button id="btnSearch" :outLine="true" class="mr-2">F1：検索</Button>
                <Button :outLine="true">削除</Button>
              </div>
            </div>
          </FormLabel>
        </div>
      </div>
    </div>
    <div class="my-5">
      <Title text="検索結果" />
      <TableUnitPrice
        :pagination="pagination"
        :rowsData="getRowData(pagination.page, pagination.pageSize)"
        @onChangePage="onChangePage"
      />
    </div>
    <Footer />
  </div>
</template>
