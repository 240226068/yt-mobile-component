/**
 * Created by mas on 2017/9/18.
 */
import { moment } from './moment'

export function calendarTime(date) {
  return moment(date).calendar(null, {
    sameDay: '[今天]',
    nextDay: '[明天]',
    nextWeek: 'dddd',
    lastDay: '[昨天]',
    lastWeek: 'dddd',
    sameElse: 'LL'
  })
}
