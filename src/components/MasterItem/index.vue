<script setup lang="ts">
import { optionsApprove, optionsDelete, optionsMatch } from '../../constants/common'
const onClear = () => {
  // TODO:
}
const onSearch = () => {
  // TODO:
}
const onAdd = () => {
  // TODO:
}
</script>

<template>
  <div>
    <div class="box-search">
      <Title text="検索条件入力" />
      <div class="content grid grid-flow-row-dense grid-cols-12">
        <div class="content-right col-span-6">
          <DatePicker text="適用日" />
          <SearchInput text="データ種別" className="w-[150px]" subText="固定費" />
          <DoubleInput text="項目コード" className="w-[100px]" />
          <SingleInputCheckbox text="項目名" :options="optionsMatch" className="w-[250px]" />
        </div>
        <div class="content-left col-span-6">
          <ClassifyCheckbox text="承認区分" :options="optionsApprove" />
          <ClassifyCheckbox text="削除区分" :options="optionsDelete" />
          <ChooseFile text="ファイル選択" textBtnChoose="ファイル選択" textBtnLoad="ファイル取込" />
        </div>
      </div>
      <div class="group-btn py-5 grid grid-flow-row-dense grid-cols-12">
        <div class="group-btn-left col-span-6">
          <Button
            @click="onClear"
            class="bg-white text-sky-700 hover:bg-wite border border-sky-700"
          >
            {{ `クリア` }}
          </Button>
        </div>
        <div class="group-btn-left col-span-6 text-end">
          <Button
            @click="onSearch"
            class="bg-white text-sky-700 hover:bg-wite border border-sky-700 mr-2"
          >
            {{ `検索` }}
          </Button>
          <Button @click="onAdd">
            {{ `新規登録` }}
          </Button>
        </div>
      </div>
    </div>
    <div class="box-table">
      <Title text="検索結果" />
      <div class="content">
        <Table />
      </div>
    </div>
  </div>
</template>
