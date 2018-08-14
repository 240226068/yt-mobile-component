/**
 * Created by mas on 2018/3/17.
 */
export function check(obj, msg) {
  for (let key in msg) {
    let li = key.split('.')
    if (li.length === 1) {
      let val = obj[key]
      if (!val) {
        return msg[key]
      } else {
        if (val instanceof Array && !val.length) {
          return msg[key]
        }
      }
    } else {
      let val = obj
      for (let i = 0; i < li.length; i++) {
        val = val[li[i]]
        if (!val) {
          return msg[key]
        } else {
          if (val instanceof Array && !val.length) {
            return msg[key]
          }
        }
      }
    }
  }
  return null
}
