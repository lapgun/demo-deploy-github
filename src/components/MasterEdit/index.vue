<script setup lang="ts">
import { storeToRefs } from 'pinia'
import useMasterEditStore from '@/stores/masterEdit'

const store = useMasterEditStore()
const {
  effectiveDate,
  dataType,
  itemCode,
  itemNameKana,
  itemNameKanji,
  insurancePoints,
  standardUnitPrice,
  feeCategory,
  approvalCategory,
  deletionCategory,
} = storeToRefs(store)
</script>

<template>
  <FormSubmit>
    <div>
      <Title text="は必須" :required="true" />
      <FormLabel text="適用開始日" required="true" class="mb-1">
        <DatePicker v-model="effectiveDate" />
      </FormLabel>
      <FormLabel text="固定費" required="true" class="mb-1">
        <SearchInput subText="固定費" v-model="dataType" />
      </FormLabel>
      <FormLabel text="項目コード" required="true" class="mb-1">
        <div class="flex flex-row justify-between justify-items-center" style="flex: 1">
          <FormInput v-model="itemCode" />
          <Button class="bg-white text-sky-700 hover:bg-wite border border-sky-700">削除</Button>
        </div>
      </FormLabel>
    </div>
    <div class="py-4">
      <Title text="名称情報" />
      <FormLabel text="項目名（カナ）" class="mb-1">
        <FormInput v-model="itemNameKana" className="w-[300px]" />
      </FormLabel>
      <FormLabel text="項目名" class="mb-1">
        <FormInput v-model="itemNameKanji" className="w-[300px]" />
      </FormLabel>
    </div>
    <div>
      <Title text="項目情報" />
      <FormLabel text="保険点数" class="mb-1">
        <FormInput v-model="insurancePoints" />
      </FormLabel>
      <FormLabel text="標準単価" class="mb-1">
        <FormInput v-model="standardUnitPrice" />
      </FormLabel>
      <FormLabel text="料金区分" class="mb-1">
        <SearchInput v-model="feeCategory" subText="その他（検査外）" />
      </FormLabel>
      <FormLabel text="標準単価" class="mb-5">
        <FormCheckbox v-model="approvalCategory" label="承認" />
      </FormLabel>
      <FormLabel text="削除区分" class="mb-5">
        <FormCheckbox v-model="deletionCategory" label="削除" />
      </FormLabel>
    </div>
  </FormSubmit>
  <Footer />
</template>
