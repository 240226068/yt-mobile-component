/**
 * Created by mas on 2018/3/17.
 */
import * as base from './base/index'

export default {
  install (Vue) {
    for (let key in base) {
      Vue.component('yt' + key, base[key])
    }
  }
}
