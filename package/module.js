import * as service from './service'

export default {
  install(Vue) {
    for (let key in service) {
      Vue.prototype[`$${key}`] = service[key]
    }
  }
}
