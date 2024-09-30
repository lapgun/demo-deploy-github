import { defineStore } from 'pinia'
import { reactive } from 'vue'

const useMasterItemStore = defineStore('masterItem', () => {

  const state = reactive({
    effectiveDate: '11/11/2024',
    dataType: 'dataType',
    itemName: [
      "firstName",
      "lastName"
    ],
    itemCode: "itemCode",
    matchType: 1,
    approvalCategory: [1],
    deletionCategory: true,
    
  })

  return {
    state,
  }
})

export default useMasterItemStore
