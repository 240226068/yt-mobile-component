/**
 * Created by mas on 2018/3/6.
 */
export function securityGetVal(obj, props) {
  if (!obj) return

  if (typeof props === 'string') {
    props = props.split('.')
  }

  if (props.length === 0) {
    return obj
  }

  let prop = props.shift()

  if (prop && obj[prop]) {
    return securityGetVal(obj[prop], props)
  }
  return undefined
}
