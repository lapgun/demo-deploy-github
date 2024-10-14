import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

import App from './App.vue'
import router from './router'

import CommonLayout from './layouts/commonLayout.vue'
import Input from './components/ui/input/Input.vue'
import Checkbox from './components/ui/checkbox/Checkbox.vue'
import Button from './components/ui/button/Button.vue'
import SearchInput from './components/Common/SearchInput.vue'
import DatePicker1 from './components/Common/DatePicker1.vue'
import ErrorMessage from './components/Common/ErrorMessage.vue'
import Title from './components/Common/Title.vue'
import Label from './components/ui/label/Label.vue'
import ChooseFile from './components/Common/ChooseFile.vue'
import Table123 from './components/Common/Table.vue'
import Pagination from './components/Common/Pagination.vue'
import Selection from './components/Common/Selection.vue'
import FormCheckbox from './components/Common/FormCheckbox.vue'
import FormRadio from './components/Common/FormRadio.vue'
import FormSubmit from './components/Common/FormSubmit.vue'
import FormLabel from './components/Common/FormLabel.vue'
import FormInput from './components/Common/FormInput.vue'
import FormCheckboxGroup from './components/Common/FormCheckboxGroup.vue'
import Dialog from './components/Common/Dialog.vue'
import Footer from './components/Common/Footer.vue'
import DatePicker2 from './components/Common/DatePicker2.vue'

import DatePicker from 'vue-datepicker-next'
import '@/assets/datePicker.css'
// import 'vue-datepicker-next/index.css'
const app = createApp(App)

// Use Router
app.use(router)

// Use Store
app.use(createPinia())

// Use Loading
app.use(LoadingPlugin)

// Use Components global
app
  .component('CommonLayout', CommonLayout)
  .component('DatePicker1', DatePicker1)
  .component('Input', Input)
  .component('Checkbox', Checkbox)
  .component('Button', Button)
  .component('DatePicker', DatePicker)
  .component('SearchInput', SearchInput)
  .component('Title', Title)
  .component('Label', Label)
  .component('ChooseFile', ChooseFile)
  .component('Table123', Table123)
  .component('Pagination', Pagination)
  .component('Selection', Selection)
  .component('Dialog', Dialog)
  .component('ErrorMessage', ErrorMessage)
  .component('FormRadio', FormRadio)
  .component('FormSubmit', FormSubmit)
  .component('FormInput', FormInput)
  .component('FormLabel', FormLabel)
  .component('FormCheckbox', FormCheckbox)
  .component('FormCheckboxGroup', FormCheckboxGroup)
  .component('Footer', Footer)
  .component('DatePicker', DatePicker)
  .component('DatePicker2', DatePicker2)

app.mount('#app')
