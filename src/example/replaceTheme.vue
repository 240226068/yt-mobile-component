<template>
  <yt-page title="一键换肤" origin="left" :more.sync="more" :input="input" :leftData="leftData" :rightData="rightData" :flex="true">
    <yt-button-tab @change="tabChange" v-model="barActive" slot="bar" type="warning" :list="list6"/>
    <ul class="ul" slot="more">
      <li @click="setTheme('LightBlue')">浅蓝</li>
      <li @click="setTheme('ShallowBlack')">浅黑</li>
      <li @click="setTheme('LightRed')">浅红</li>
      <li @click="setTheme('PlainRed')">朴素红</li>
    </ul>
    <div class="yt-scroll" style="flex: 1;">
      <yt-cell title="角标">
        <span style="position: relative;padding-right: 15px;margin-right: 10px;">
          数量<yt-badge :num="10"></yt-badge>
        </span>
      </yt-cell>
      <yt-cell border="none" v-for="(item, index) in list5" :title="item.label" :key="index">
        <yt-count :max="item.count" v-model="item.useCount"></yt-count>
      </yt-cell>
      <yt-split/>
      <yt-cell border="none" title="巡检人">
        <yt-select v-model="InspectionPerson" val="id" label="name" :list="InspectionPersonList"></yt-select>
      </yt-cell>
      <yt-split/>
      <div class="btn-wrapper">
        <yt-btn class="btn" size="normal">提交</yt-btn>
        <yt-btn class="btn" size="medium">提交</yt-btn>
        <yt-btn class="btn" size="small">提交</yt-btn>
        <yt-btn class="btn" size="mini">提交</yt-btn>
      </div>
      <div class="btn-wrapper">
        <yt-btn class="btn" plain size="normal">提交</yt-btn>
        <yt-btn class="btn" plain size="medium">提交</yt-btn>
        <yt-btn class="btn" plain size="small">提交</yt-btn>
        <yt-btn class="btn" plain size="mini">提交</yt-btn>
      </div>
      <div class="btn-wrapper">
        <yt-btn class="btn" round size="normal">提交</yt-btn>
        <yt-btn class="btn" round size="medium">提交</yt-btn>
        <yt-btn class="btn" round size="small">提交</yt-btn>
        <yt-btn class="btn" round size="mini">提交</yt-btn>
      </div>
      <div class="btn-wrapper">
        <yt-btn class="btn" icon="iconfont icon-search" circle size="normal"></yt-btn>
        <yt-btn class="btn" icon="iconfont icon-search" circle size="normal"></yt-btn>
        <yt-btn class="btn" icon="iconfont icon-search" circle size="normal"></yt-btn>
        <yt-btn class="btn" icon="iconfont icon-search" circle size="normal"></yt-btn>
      </div>
      <yt-split/>
      <yt-checkList :list="list" label="label" val="id" v-model="selectList" :max="1"/>
      <yt-split/>
      <yt-radio v-model="select" val="id" label="name" :list="list2"/>
      <yt-split/>
      <yt-cell border="all" title="隐患级别">
        <yt-radio class="radio-right" val="id" label="name" v-model="select3" :list="list3"></yt-radio>
      </yt-cell>
      <yt-split/>
      <yt-switch border="none" label="打开消息通知" v-model="open"/>
      <yt-split/>
      <yt-timeline :list="list4"></yt-timeline>
    </div>
    <yt-btn>提交</yt-btn>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  const list = [
    {
      disabled: true,
      label: "101分区",
      id: 1
    },
    {
      label: "102分区",
      id: 2
    },
    {
      label: "103分区",
      id: 3
    },
    {
      label: "104分区",
      id: 4
    }
  ];
  const list2 = [
    {
      disabled: true,
      id: 1,
      name: '地点A'
    },
    {
      id: 2,
      name: '地点B'
    },
    {
      id: 3,
      name: '地点C'
    },
    {
      id: 4,
      name: '地点D'
    }
  ]
  const list3 = [
    {
      id: 1,
      name: '一般隐患'
    },
    {
      id: 2,
      name: '重大隐患'
    }
  ]
  const list4 = [
    {
      time: '2018-03-26 9:25',
      desc: '管理员归档工单'
    },
    {
      time: '2018-03-25 18:25',
      desc: '巡检员提交工单'
    },
    {
      time: '2018-03-25 14:25',
      desc: '巡检员签收工单'
    },
    {
      time: '2018-03-25 09:45',
      desc: '管理员创建工单'
    }
  ]
  const list5 = [
    {
      label: '润滑油',
      useCount: 0,
      count: 8
    },
    {
      label: '灯泡',
      useCount: 2,
      count: 10
    },
    {
      label: '螺丝',
      useCount: 9,
      count: 100
    }
  ]
  const list6 = [
    {
      text: '动态',
      badge: {num: 99}
    },
    {
      text: '附近',
      badge: {num: 10}
    },
    {
      text: '私密',
      badge: {num: 10}
    }
  ]
  const list7 = [
    {
      name: '巡检员一',
      id: 1
    },
    {
      name: '巡检员二',
      id: 2
    },
    {
      name: '巡检员三',
      id: 3
    },
    {
      name: '巡检员四',
      id: 4
    },
    {
      name: '巡检员五',
      id: 5
    },
    {
      name: '巡检员六',
      id: 6
    },
    {
      name: '巡检员七',
      id: 7
    },
    {
      name: '巡检员八',
      id: 8
    }
  ]
  export default {
    name: 'page-example',
    inject: {
      App: {
        default: {}
      }
    },
    data () {
      return {
        barActive: 0,
        list: list,
        selectList: [3],
        list2: list2,
        list3: list3,
        list4: list4,
        list5: list5,
        list6: list6,
        InspectionPersonList: list7,
        InspectionPerson: [],
        select: 2,
        select3: 1,
        open: true,
        more: false,
        input: false,
        leftData: [{
          font: 'iconfont icon-search',
          click: () => {
            this.input = !this.input
          }
        }],
        rightData: [{
          font: 'iconfont icon-more',
          click: () => {
            this.more = true
          }
        }]
      }
    },
    activated() {
      setTimeout(() => {
        this.list6 = [
          {
            text: '动态',
            badge: {num: 99}
          },
          {
            text: '附近',
            badge: {num: 10}
          }
        ]
      }, 5000)
    },
    methods: {
      tabChange(page) {
        console.log(page, 'change事件收到的barActive值')
      },
      setTheme(theme) {
        this.more = false
        this.$theme = theme
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .ul
    min-width 120px
    li
      padding 0 15px
      color #333333
      font-size 14px
      height 40px
      line-height 40px
      text-align center
      box-sizing border-box
      border-bottom 1px solid #f1f1f1
      &:last-child
        border-bottom 0
      &:active
        background-color #f5f5f5

  .radio-right
    display flex

  .btn-wrapper
    margin 15px

  .btn
    margin-right 20px
</style>
