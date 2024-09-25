<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableEmpty,
} from '../../components/ui/table'

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
    className: 'text-right',
  },
  {
    label: '保険点数',
    className: 'text-right',
  },
  {
    label: '標準単価',
    className: 'text-right',
  },
  {
    label: '料金区分',
    className: 'text-right',
  },
  {
    label: '適用開始日',
    className: 'text-right',
  },
  {
    label: '更新日',
    className: 'text-right',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
  {
    label: '',
  },
]

const data = [
  {
    dataType: 'C：固定費',
    itemCode: '000001',
    itemNameKana: 'ｷｷｶｼﾀﾞｼﾘｮｳ',
    itemName: '機器貸出料',
    insurancePoints: '99999',
    standardPrice: '10,000.0',
    feeClassification: '05：その他(検査外)',
    effectiveDate: '2001/01/01',
    updateDate: '2001/01/01',
  },
  {
    dataType: 'C：固定費',
    itemCode: '000001',
    itemNameKana: 'ｷｷｶｼﾀﾞｼﾘｮｳ',
    itemName: '機器貸出料',
    insurancePoints: '99999',
    standardPrice: '10,000.0',
    feeClassification: '05：その他(検査外)',
    effectiveDate: '2001/01/01',
    updateDate: '2001/01/01',
  },
]
</script>

<template>
  <div class="content-header flex pb-5 grid grid-flow-row-dense grid-cols-12">
    <div class="total-item col-span-4 content-center">1 - 7 件(全 7件)</div>
    <div class="pagination col-span-4 justify-center flex">
      <Pagination />
    </div>
    <div class="group-btn col-span-4 justify-end flex">
      <Button class="bg-white text-sky-700 hover:bg-wite border border-sky-700 mr-2">
        {{ 'ファイル出力' }}
      </Button>
      <Selection />
    </div>
  </div>
  <div class="content-table">
    <Table>
      <TableHeader>
        <TableRow class="hover:bg-indigo-100">
          <TableHead :class="item.className" v-for="(item, index) in headers" :key="index">
            {{ item.label }}
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody class="border border-black">
        <template v-if="data.length">
          <TableRow v-for="(item, index) in data" :key="index">
            <TableCell class="font-medium">
              {{ item.dataType }}
            </TableCell>
            <TableCell>{{ item.itemCode }}</TableCell>
            <TableCell>{{ item.itemNameKana }}</TableCell>
            <TableCell class="text-right">
              {{ item.itemName }}
            </TableCell>
            <TableCell class="text-right">
              {{ item.insurancePoints }}
            </TableCell>
            <TableCell class="text-right">
              {{ item.standardPrice }}
            </TableCell>
            <TableCell class="text-right">
              {{ item.feeClassification }}
            </TableCell>
            <TableCell class="text-right">
              {{ item.effectiveDate }}
            </TableCell>
            <TableCell class="text-right">
              {{ item.updateDate }}
            </TableCell>
            <TableCell class="text-right text-sky-700">詳細</TableCell>
            <TableCell class="text-right text-sky-700">修正</TableCell>
            <TableCell class="text-right text-sky-700">複写 </TableCell>
            <TableCell class="text-right text-sky-700">追加</TableCell>
          </TableRow>
        </template>
        <TableEmpty v-else>
          <div>データなし</div>
        </TableEmpty>
      </TableBody>
    </Table>
  </div>
  <div class="content-footer text-center pt-10">
    <div class="pagination col-span-4 justify-center flex">
      <Pagination />
    </div>
  </div>
</template>
