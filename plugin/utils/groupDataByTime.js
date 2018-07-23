/**
 * Created by mas on 2018/3/29.
 */
function getGroupData() {
  let now = new Date().setHours(0, 0, 0, 0)
  let onday = 1000 * 60 * 60 * 24
  return [
    {
      title: '今日',
      value: now
    },
    {
      title: '昨日',
      value: now - onday
    },
    {
      title: '一周内',
      value: now - onday * 7
    },
    {
      title: '一月内',
      value: now - onday * 30
    },
    {
      title: '更多',
      value: 0
    }
  ]
}
export function groupDataByTime(list, field = 'createdAt', groupData) {
  groupData = groupData || getGroupData()
  let results = list.map(item => {
    let createdAt = item[field]
    let time = null
    if (typeof createdAt === 'string' || createdAt instanceof Date) {
      time = Date.parse(createdAt)
    } else if (typeof createdAt === 'number') {
      time = createdAt
    }
    if (!time) return item
    let _tag = null
    for (let i = 0; i < groupData.length; i++) {
      if (time > groupData[i].value) {
        if (!groupData[i].tag) {
          _tag = groupData[i].title
          groupData[i].tag = true
        }
        break
      }
    }
    return Object.assign(item, {_tag})
  })
  return results
}
