<script setup lang="ts">
import { ref } from 'vue'
import FormLabel from '../Common/FormLabel.vue'
import FormInput from '../Common/FormInput.vue'

const optionMatchType = ref([
  {
    title: '前方一致',
    value: 1,
  },
  {
    title: '後方一致',
    value: 2,
  },
])

const optionApprovalCategory = ref([
  {
    title: '承認',
    value: 1,
  },
  {
    title: '未承認',
    value: 2,
  },
])
</script>

<template>
  <div>
    <Title text="検索条件入力" />
    <div class="content grid grid-flow-row-dense grid-cols-12">
      <div class="content-left col-span-6">
        <FormLabel text="適用日">
          <!-- <DatePicker /> -->
        </FormLabel>
        <FormLabel text="データ種別">
          <SearchInput subText="固定費" />
        </FormLabel>
        <FormLabel class="mb-4" text="項目コード">
          <div class="text-lg rotate-[0.03deg] flex">
            <Input class="mr-4 w-[100px]" />
            ～
            <Input class="mr-4 w-[100px]" />
          </div>
        </FormLabel>
        <FormLabel text="適用日">
          <FormInput />
          <FormRadio :options="optionMatchType" />
        </FormLabel>
      </div>
      <div class="content-right col-span-6">
        <FormLabel class="mb-4" text="承認区分">
          <FormCheckboxGroup :options="optionApprovalCategory" />
        </FormLabel>
        <FormLabel class="mb-4" text="承認区分">
          <FormCheckbox label="削除" />
        </FormLabel>
        <FormLabel text="ファイル選択">
          <ChooseFile label="削除" textBtnChoose="ファイル選択" textBtnLoad="ファイル取込" />
        </FormLabel>
      </div>
    </div>
    <div class="group-btn py-5 grid grid-flow-row-dense grid-cols-12">
      <div class="group-btn-left col-span-6">
        <Button :outLine="true">クリア</Button>
      </div>
      <div class="group-btn-right col-span-6 text-end">
        <Button :outLine="true" class="mr-2">検索</Button>
        <Button :outLine="true">新規登録</Button>
      </div>
    </div>
  </div>
  <div>
    <Title text="検索結果" />
    <Table />
  </div>
</template>
