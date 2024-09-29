import { defineStore } from 'pinia'
import { reactive } from 'vue'

/**
 * 系统配置定义
 */
const useConfigStore = defineStore('config', () => {
  /**
   * 变量
   */
  // 系统界面配置
  const config = reactive({
    dateTime: '11/11/2024', // 菜单栏宽度
    email: '123123', // 底部菜单栏高度
    passCheck: [1],
    radiotest: 1,
    oneTwo: ['one', 'two'],
  })

  return {
    config,
  }
})

export default useConfigStore
