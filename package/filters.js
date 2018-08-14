/**
 * Created by mas on 2017/9/18.
 */
import {
  parseTimeToString,
  array2String,
  formatTime,
  friendlyFileSize,
  friendlyTime,
  securityGetVal,
  calendarTime
} from './utils/index'

const directives = {
  array2String,
  formatTime,
  friendlyFileSize,
  friendlyTime,
  securityGetVal,
  parseTimeToString,
  calendarTime
}

export default {
  install(Vue) {
    for (let key in directives) {
      Vue.filter(key, directives[key])
    }
  }
}
