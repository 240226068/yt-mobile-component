/**
 * Created by mas on 2018/3/17
 */
import router from './router'
import filters from './filters.js'
import components from './component.js'
import module from './module.js'

export * from './service'
export * from './utils/index'
export { default as bridge2 } from './bridge'

export default {
  install(Vue) {
    Vue.use(router)
    Vue.use(filters)
    Vue.use(components)
    Vue.use(module)
  }
}
