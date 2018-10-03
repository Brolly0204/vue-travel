import Vue from 'vue'
import * as home from './home'
import * as city from './city'
export default function () {
  const REQ_APIS = {
    ...home,
    ...city
  }
  Vue.prototype.$api = {}
  let apis = Object.keys(REQ_APIS)
  apis.forEach(item => {
    Vue.prototype.$api[item] = REQ_APIS[item]
  })
}
