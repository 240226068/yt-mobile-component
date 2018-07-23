/**
 * Created by mas on 2018/3/17.
 */
export function isImg(src) {
  let res = src.replace(/^.+\./, '').toLowerCase().match(/^(png|jpg|jpeg|gif)$/)
  if (!res) return false
  return true
}
