<template>
  <yt-page title="collapse" scroll>
    <p class="title">icon左边</p>
    <yt-collapse align="left" v-model="active0" :list="list0">
      <div slot-scope="props">
        {{props.body}}
      </div>
    </yt-collapse>
    <p class="title">单个</p>
    <yt-collapse v-model="active" :list="list">
      <div slot-scope="props">
        {{props.body}}
      </div>
    </yt-collapse>
    <p class="title">多个(手风琴模式)</p>
    <yt-collapse v-model="active2" :list="list2">
      <div slot-scope="props">
        {{props.body}}
      </div>
    </yt-collapse>
    <p class="title">多个</p>
    <yt-collapse :accordion="false" v-model="active3" :list="list3">
      <div slot-scope="props">
        {{props.body}}
      </div>
    </yt-collapse>
    <p class="title">多个(默认打开, 按照索引)</p>
    <yt-collapse :accordion="false" v-model="active4" :list="list4">
      <div slot-scope="props">
        {{props.body}}
      </div>
    </yt-collapse>
    <p class="title">多个(默认打开, 按照指定的name)</p>
    <yt-collapse :accordion="false" name="title" v-model="active5" :list="list5">
      <div slot-scope="props">
        {{props.body}}
      </div>
    </yt-collapse>
  </yt-page>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'collapse-example',
    data() {
      return {
        active0: false,
        list0: [
          {
            title: '标题1',
            body: '描述1'
          }
        ],
        active: false,
        list: [
          {
            title: '标题1',
            body: '描述1'
          }
        ],
        active2: [],
        list2: [
          {
            title: '标题1',
            body: '描述1'
          },
          {
            title: '标题2',
            body: '描述2'
          },
          {
            title: '标题3',
            body: '描述3'
          },
          {
            title: '标题4',
            body: '描述4'
          },
          {
            title: '标题5',
            body: '描述5'
          }
        ],
        active3: [],
        list3: [
          {
            title: '标题1',
            body: '描述1'
          },
          {
            title: '标题2',
            body: '描述2'
          },
          {
            title: '标题3',
            body: '描述3'
          },
          {
            title: '标题4',
            body: '描述4'
          },
          {
            title: '标题5',
            body: '描述5'
          }
        ],
        active4: [1, 3],
        list4: [
          {
            title: '标题1',
            body: '描述1'
          },
          {
            title: '标题2',
            body: '描述2'
          },
          {
            title: '标题3',
            body: '描述3'
          },
          {
            title: '标题4',
            body: '描述4'
          },
          {
            title: '标题5',
            body: '描述5'
          }
        ],
        active5: ['标题1', '标题2'],
        list5: [
          {
            title: '标题1',
            body: '描述1'
          },
          {
            title: '标题2',
            body: '描述2'
          },
          {
            title: '标题3',
            body: '描述3'
          },
          {
            title: '标题4',
            body: '描述4'
          },
          {
            title: '标题5',
            body: '描述5'
          }
        ]
      }
    }
  }
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .title
    padding 0 10px
    font-size 14px
    line-height 30px
    background-color #fafafa
</style>
