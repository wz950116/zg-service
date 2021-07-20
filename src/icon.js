import Vue from 'vue'
import SvgIcon from '@/components/svg-icon/svg-icon'

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => {
  const keys = requireContext.keys()
  const newKeys = keys.map(requireContext)
  return newKeys
}
const req = require.context('./common/svg', false, /\.svg$/)
requireAll(req)
