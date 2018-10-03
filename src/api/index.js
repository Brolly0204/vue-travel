import Vue from 'vue'
import * as home from './home'

export default function () {
  let REQ_APIS = Object.assign(
    {},
    home
  )
  Vue.prototype.$api = {}
  let apis = Object.keys(home)
  apis.forEach(item => {
    Vue.prototype.$api[item] = REQ_APIS[item]
  })
}
