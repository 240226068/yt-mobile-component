<template>
  <yt-page title="radioList" :leftData="[]" scroll>
    <yt-cell title="隐患等级">
      <yt-radioList :list="list4" label="label" val="id" v-model="selectList4"/>
    </yt-cell>
    <yt-split></yt-split>
    <yt-radioList class="list" title="选择按钮左边" :list="list" label="label" val="id" v-model="selectList" :inline="false"/>
    <yt-split></yt-split>
    <yt-radioList class="list" title="选择按钮右边" :list="list2" label="label" val="id" v-model="selectList2" pos="right" simple :inline="false"/>
    <yt-split></yt-split>
    <yt-radioList class="list" title="自定义" :list="list3" label="label" val="id" v-model="selectList3" pos="right" :inline="false">
      <div slot-scope="data">
        <p>名称: {{data.label}}</p>
        <p>id: {{data.id}}</p>
      </div>
    </yt-radioList>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  const list = [
    {
      label: '101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区',
      disabled: true,
      id: 1
    },
    {
      label: '101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区101分区',
      id: 2
    },
    {
      label: '103分区',
      id: 3
    },
    {
      label: '104分区',
      id: 4
    }
  ]
  export default {
    name: 'radioList-example',
    data() {
      return {
        selectList: [],
        selectList2: [],
        selectList3: [],
        selectList4: [],
        list: list,
        list2: list,
        list3: list,
        list4: [
          {
            label: '北京',
            id: 1
          },
          {
            label: '上海',
            id: 2
          }
        ]
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .list
    height auto
  .row
    flex 1
    overflow hidden
    line-height 40px
    border-bottom 1px solid #f1f1f1
</style>
