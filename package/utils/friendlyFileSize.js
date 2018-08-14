/**
 * Created by mas on 2017/9/18.
 */
export function friendlyFileSize(bytes) {
  if (bytes === 0) return '0B'
  let k = 1024
  let sizes = 'B|KB|MB|GB|TB|PB|EB|ZB|YB'.split('|')
  let i = Math.floor(Math.log(bytes) / Math.log(k))
  return (bytes / Math.pow(k, i)).toPrecision(3) + sizes[i]
}
