/**
 * Created by mas on 2018/3/17.
 */
export function mergeArray(primaryList, referenceList, primaryKey, referenceKey, hook) {
  return primaryList.map(item => {
    let obj = referenceList.find(child => item[primaryKey] === child[referenceKey]) || {}
    if (hook) {
      return hook(item, obj)
    } else {
      return Object.assign({}, item, obj)
    }
  })
}
