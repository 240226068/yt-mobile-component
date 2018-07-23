/**
 * Created by mas on 2018/3/17.
 */
import * as service from './service/index'

export default {
  install(Vue) {
    Vue.prototype.$serviceState = false
    Vue.prototype.$updateService = function (serviceState) {
      Vue.prototype.$serviceState = serviceState
    }
    Vue.prototype.$getService = function () {
      return Vue.prototype.$serviceState
    }
    for (let key in service) {
      Vue.prototype[`$${key}`] = service[key]
    }
  }
}
