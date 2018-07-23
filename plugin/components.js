/**
 * Created by mas on 2018/3/17.
 */
import * as components from './components/index'

export default {
  install (Vue) {
    for (let key in components) {
      Vue.component('yt' + key, components[key])
    }
  }
}
