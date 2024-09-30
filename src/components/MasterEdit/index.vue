<script setup lang="ts">
import masterEditJson from '@/definition-page/master-edit.json'
import { provide } from 'vue'
import { userFormCustom } from '@/schemas/commonShema'

const initForm = {
  effectiveDate: '2024/09/24',
  dataType: 'dataType',
  itemCode: 'itemCode',
  itemNameKana: 'itemNameKana',
  itemNameKanji: 'itemNameKanji',
  insurancePoints: 'insurancePoints',
  standardUnitPrice: 'standardUnitPrice',
  feeCategory: 'feeCategory',
  approvalCategory: false,
  deletionCategory: true,
}
const form = userFormCustom(masterEditJson, initForm)

provide('state', {
  ...form,
})

provide('actions', {
  ...form,
})
</script>

<template>
  <component :is="masterEditJson.type" :contents="masterEditJson.contents" />
  <Footer />
</template>
