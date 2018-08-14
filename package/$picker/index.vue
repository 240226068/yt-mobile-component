<template>
  <yt-popup v-model="showFlag">
    <div class="yt-picker-header yt-border-all">
      {{title}}
      <yt-btn @click="handlerConfirm" class="yt-picker-btn" size="small">确认</yt-btn>
    </div>
    <div class="yt-picker-wrapper">
      <picker v-if="GetVisible('YYYY')" v-model="curYear" name="year"
              :listData="GetListFromSection(years, TEMPLATE.year)"
              type="circle"></picker>
      <picker v-if="GetVisible('MM')" v-model="curMonth" name="month"
              :listData="GetListFromSection(months, TEMPLATE.month)"
              type="circle"></picker>
      <picker v-if="GetVisible('DD')" v-model="curDay" name="day" :listData="GetListFromSection(days, TEMPLATE.day)"
              type="circle"></picker>
      <picker v-if="GetVisible('hh')" v-model="curHour" name="hour"
              :listData="GetListFromSection(hours, TEMPLATE.hour)"
              type="circle"></picker>
      <picker v-if="GetVisible('mm')" v-model="curMinute" name="minute"
              :listData="GetListFromSection(minutes, TEMPLATE.minute)"
              type="circle"></picker>
    </div>
  </yt-popup>
</template>

<script type="text/ecmascript-6">
  import picker from './picker.vue'
  import { formatTime } from '../utils'

  const TEMPLATE = {
    year: '年',
    month: '月',
    day: '日',
    hour: '时',
    minute: '分'
  }
  export default {
    name: 'yt-picker',
    components: {
      picker
    },
    computed: {
      TEMPLATE() {
        return this.showTemplate ? TEMPLATE : {
          year: '',
          month: '',
          day: '',
          hour: '',
          minute: ''
        }
      },
      days() {
        let section = [1, 31]
        let isR = (this.curYear % 4 === 0 && this.curYear % 100 !== 0) || (this.curYear % 400 === 0)
        let c1 = [1, 3, 5, 7, 8, 10, 12].join().indexOf(this.curMonth)
        if (this.curMonth === 2) {
          if (isR) {
            section = [1, 29]
          } else {
            section = [1, 28]
          }
        } else if (c1 < 0) {
          section = [1, 30]
        } else {
          section = [1, 31]
        }
        return section
      }
    },
    data() {
      return {
        title: '',
        showTemplate: true,
        showFlag: false,
        options: {},
        curYear: null,
        curMonth: null,
        curDay: null,
        curHour: null,
        curMinute: null,
        years: [2000, 2050],
        months: [1, 12],
        hours: [0, 23],
        minutes: [0, 59],
        format: '',
        confirm: null
      }
    },
    methods: {
      GetVisible(key) {
        if (this.format.indexOf(key) < 0) return false
        return true
      },
      GetListFromSection(section, key) {
        return Array.from({ length: section[1] - section[0] + 1 }, (value, index) => section[0] + index + key)
      },
      show(options = {}) {
        this.showFlag = true
        let { format, current, confirm, showTemplate, title } = options
        this.title = title
        this.showTemplate = showTemplate
        let date = new Date(Date.now())
        if (current) {
          if (typeof current === 'string') {
            date = new Date(Date.parse(current))
          } else if (typeof current === 'number') {
            date = new Date(current)
          } else if (current instanceof Date) {
            date = current
          }
        }
        this.curYear = date.getFullYear() + this.TEMPLATE.year
        this.curMonth = date.getMonth() + 1 + this.TEMPLATE.month
        this.curDay = date.getDate() + this.TEMPLATE.day
        this.curHour = date.getHours() + this.TEMPLATE.hour
        this.curMinute = date.getMinutes() + this.TEMPLATE.minute
        this.format = format
        this.confirm = confirm
      },

      handlerConfirm() {
        if (this.confirm) {
          let time = `${this.curYear}-${this.curMonth}-${this.curDay} ${this.curHour}:${this.curMinute}`
          this.confirm(formatTime(time, this.format))
        }
        this.showFlag = false
      }
    }
  }
</script>
