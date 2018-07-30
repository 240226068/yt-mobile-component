<template>
  <yt-page title="Radio" :leftData="[]">
    <div class="yt-scroll">
      <yt-radio title="请选择地点" v-model="select" val="id" label="name" :list="list"/>
      <yt-radio title="请选择地点" v-model="select" val="id" label="name" :list="list" align="right"/>
      <yt-split/>
      <yt-cell border="all" title="隐患级别">
        <yt-radio class="radio" val="id" label="name" v-model="select2" :list="list2"></yt-radio>
      </yt-cell>
      <yt-split/>
      <yt-radio title="请选择地点(定制)" v-model="select3" :list="list3">
        <div slot-scope="props">
          <p>label为: {{props.data.name}}</p>
          <p>id为: {{props.data.id}}</p>
        </div>
      </yt-radio>
    </div>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'Radio-example',
    data() {
      return {
        select: 2,
        list: [
          {
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
            name: '地点D',
            disabled: true
          }
        ],
        select2: 2,
        list2: [
          {
            id: 1,
            name: '一般隐患'
          },
          {
            id: 2,
            name: '重大隐患'
          }
        ],
        select3: 2,
        list3: [
          {
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
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .radio
    display flex
</style>
