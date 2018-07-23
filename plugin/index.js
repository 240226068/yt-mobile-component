/**
 * Created by mas on 2018/3/17.
 */
import components from './components.js'
import filters from './filters.js'
import service from './service.js'
import theme from './theme'
import { ListenBack, ListenResume } from './plus'

export * from './service/index'
export * from './utils/index'
export * from './mixins/index'
export { Router } from './router'

let VueTouch = require('vue-touch')
export default {
  install(Vue) {
    Vue.use(VueTouch, { name: 'yt-touch' })
    Vue.use(filters)
    Vue.use(service)
    Vue.use(components)
    Vue.use(theme)
    ListenBack()
    ListenResume()
  }
}
