/**
 * Created by mas on 2017/10/31.
 */

export function parseTimeToString (num) {
  if (isNaN(num)) {
    return '00:00'
  }
  return ('00' + Math.floor(num / 60)).substr((Math.floor(num / 60) + '').length) + ':' + ('00' + Math.floor(num % 60)).substr((Math.floor(num % 60) + '').length)
}
