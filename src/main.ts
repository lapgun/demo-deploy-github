import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import CommonLayout from './layouts/commonLayout.vue'
import Input from './components/ui/input/Input.vue'
import Checkbox from './components/ui/checkbox/Checkbox.vue'
import Button from './components/ui/button/Button.vue'
import DatePicker from './components/Common/DatePicker.vue'
import DoubleInput from './components/Common/DoubleInput.vue'
import SearchInput from './components/Common/SearchInput.vue'
import SingleInput from './components/Common/SingleInput.vue'
import Title from './components/Common/Title.vue'
import ClassifyCheckbox from './components/Common/ClassifyCheckbox.vue'
import SingleInputCheckbox from './components/Common/SingleInputCheckbox.vue'
import Label from './components/ui/label/Label.vue'
import ClassifyRadio from './components/Common/ClassifyRadio.vue'
import ChooseFile from './components/Common/ChooseFile.vue'
import Table from './components/Common/Table.vue'
import Pagination from './components/Common/Pagination.vue'
import Selection from './components/Common/Selection.vue'
import List from './components/Common/list/index.vue'
import BlockSearch from './components/Common/list/BlockSearch.vue'
import BlockTable from './components/Common/list/BlockTable.vue'
import BlockTableContent from './components/Common/list/BlockTableContent.vue'
import BlockSearchContent from './components/Common/list/BlockSearchContent.vue'
import GroupButton from './components/Common/list/GroupButton.vue'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app
  .component('CommonLayout', CommonLayout)
  .component('Input', Input)
  .component('Checkbox', Checkbox)
  .component('Button', Button)
  .component('DatePicker', DatePicker)
  .component('DoubleInput', DoubleInput)
  .component('SearchInput', SearchInput)
  .component('SingleInput', SingleInput)
  .component('Title', Title)
  .component('ClassifyCheckbox', ClassifyCheckbox)
  .component('SingleInputCheckbox', SingleInputCheckbox)
  .component('Label', Label)
  .component('ClassifyRadio', ClassifyRadio)
  .component('ChooseFile', ChooseFile)
  .component('Table', Table)
  .component('Pagination', Pagination)
  .component('Selection', Selection)
  .component('List', List)
  .component('BlockSearch', BlockSearch)
  .component('BlockTable', BlockTable)
  .component('BlockTableContent', BlockTableContent)
  .component('BlockSearchContent', BlockSearchContent)
  .component('GroupButton', GroupButton)

app.mount('#app')
