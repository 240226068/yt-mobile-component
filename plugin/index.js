/**
 * Created by mas on 2018/3/17
 */
import filters from './filters.js'
import service from './service.js'
import components from './components.js'
import Router from 'vue-router'
Router.prototype.$isBack = false
Router.prototype.$back = function (index = -1) {
  this.$isBack = true
  this.go(index)
}
Router.prototype.$push = function (options) {
  this.$isBack = false
  this.push(options)
}
export * from './service/index'
export * from './utils/index'
export default {
  install(Vue) {
    Vue.use(filters)
    Vue.use(service)
    Vue.use(components)
    Vue.use(Router)
  }
}
