import Vue from 'vue'

import {
  Loading,
  RadioButton,
  RadioGroup,
  Radio,
  DatePicker,
  MessageBox,
  Message,
  Tree,
  Select,
  Option,
  Button,
  Image
} from 'element-ui'

export const message = opt => Message({ ...opt, offset: 120 })

Vue.use(RadioButton)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(DatePicker)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Button)
Vue.use(Image)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = message
