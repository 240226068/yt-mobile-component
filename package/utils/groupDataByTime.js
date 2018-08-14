/**
 * Created by mas on 2018/3/29.
 */
import { formatTime } from './formatTime'

export function groupDataByTime(list, obj, field = 'createdAt') {
  obj = Object.assign({}, obj)
  list.forEach(v => {
    let date = formatTime(v[field], 'YYYY-MM-DD')
    if (!obj[date]) {
      obj[date] = []
    }
    obj[date].push(v)
  })
  return obj
}
