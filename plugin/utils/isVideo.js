/**
 * Created by mas on 2018/3/17.
 */

export function isVideo(src) {
  let res = src.replace(/^.+\./, '').toLowerCase().match(/^(mp4|rmvb|mkv|webm|avi)$/)
  if (!res) return false
  return true
}
