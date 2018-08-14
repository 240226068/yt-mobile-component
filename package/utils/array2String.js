/**
 * Created by mas on 2017/9/18.
 */
export function array2String(array, key) {
  if (!array) {
    return ''
  }
  if (key) {
    array = array.map(item => {
      return item[key] ? item[key] : item
    })
  }
  return array.length === 1 ? array[0] : array.join(',')
}
