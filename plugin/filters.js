/**
 * Created by mas on 2017/9/18.
 */
import {parseTimeToString, array2String, formatTime, friendlyFileSize, friendlyTime, securityGetVal} from './utils/index'

const directives = {
  array2String,
  formatTime,
  friendlyFileSize,
  friendlyTime,
  securityGetVal,
  parseTimeToString
}

export default {
  install (Vue) {
    for (let key in directives) {
      Vue.filter(key, directives[key])
    }
  }
}
