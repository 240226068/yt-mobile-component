/**
 * Created by mas on 2018/5/4.
 */
import { Theme } from './utils'

export default {
  install(Vue) {
    let theme = new Theme('Theme', 'theme', 'LightBlue')
    Vue.mixin(theme)
    Object.defineProperty(Vue.prototype, '$theme', theme)
  }
}
