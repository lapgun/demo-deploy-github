import { defineStore } from 'pinia'

const useMasterEditStore = defineStore('masterEdit', {
  state: () => ({
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
  }),
})

export default useMasterEditStore
