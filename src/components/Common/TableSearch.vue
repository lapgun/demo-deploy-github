<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  TableEmpty,
} from '../ui/table'

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
]

const data = [
  {
    dataType: 'C：固定費',
    itemCode: '000001',
    itemNameKana: 'ｷｷｶｼﾀﾞｼﾘｮｳ',
  },
  {
    dataType: 'C：固定費',
    itemCode: '000001',
    itemNameKana: 'ｷｷｶｼﾀﾞｼﾘｮｳ',
  },
  {
    dataType: 'C：固定費',
    itemCode: '000001',
    itemNameKana: 'ｷｷｶｼﾀﾞｼﾘｮｳ',
  },
  {
    dataType: 'C：固定費',
    itemCode: '000001',
    itemNameKana: 'ｷｷｶｼﾀﾞｼﾘｮｳ',
  },
  {
    dataType: 'C：固定費',
    itemCode: '000001',
    itemNameKana: 'ｷｷｶｼﾀﾞｼﾘｮｳ',
  },
]
</script>

<template>
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
          </TableRow>
        </template>
        <TableEmpty v-else>
          <div>データなし</div>
        </TableEmpty>
      </TableBody>
    </Table>
  </div>
</template>
