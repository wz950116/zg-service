import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './icon.js'
import './components'
import '@/common/css/index.scss'
import { rootFontSize } from '@/common/js/config-css.js'
import echarts from 'echarts'
import Decimal from 'decimal.js'
import NP from 'number-precision'
// 引入图片组件
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer'
import ElementUI from 'element-ui'
Vue.use(Viewer)
Vue.use(ElementUI)

Vue.config.productionTip = false
document.querySelector('html').style['font-size'] = `${rootFontSize}px`
Vue.prototype.$rootFontSize = rootFontSize

Vue.prototype.$echarts = echarts

function numberFixed(value, digit = 2) {
  if (!value && value !== 0) return value
  const decimal = new Decimal(parseFloat(value))
  return decimal.toFixed(digit, Decimal.ROUND_HALF_UP)
}
Vue.prototype.$numberFixed = numberFixed
Vue.prototype.$NP = NP

// 初始化
const init = function() {
  // 精确到指定小数点
  Vue.filter('numberFixed', numberFixed)
  // 千分位
  Vue.filter('thousands', function (value) {
    if (value === '' || value === undefined || value === null || isNaN(value)) return
    value = value.toString()
    if (/\./.test(value)) {
      return value.replace(/\d(?=(\d{3})+\.)/g, '$&,').replace(/\d{3}(?![.]|$)/g, '$&')
    } else {
      return value.replace(/\d(?=(\d{3})+$)/g, '$&,')
    }
  })
  /* eslint-disable-next-line no-new */
  new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
}
init()
