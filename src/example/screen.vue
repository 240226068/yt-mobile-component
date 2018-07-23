<template>
  <yt-page title="筛选">
    <yt-screen>
      <yt-screen-panel label="区域">
        区域
      </yt-screen-panel>
      <yt-screen-panel label="类型">
        类型
      </yt-screen-panel>
      <yt-screen-panel label="价格">
        价格
      </yt-screen-panel>
    </yt-screen>
    <yt-shopCart :count="totalCount" :active="!!totalCategory" ref="cart">
      <div class="logo-content">
        <div class="logo-desc">
          共添加<span class="logo-num" :class="totalCategory ? 'is-highlight' : ''">{{totalCategory}}</span>类耗材
        </div>
        <yt-btn class="logo-btn" :class="!!totalCategory ? 'enough' : 'not-enough'" edge :loading="confirm">保存</yt-btn>
      </div>
      <div class="check-title" slot="title">
        <span>以下为已加耗材</span>
        <span @click="doClear"><i class="check-clear iconfont icon-clear"></i>清空</span>
      </div>
      <div class="check-list" slot="list">
        <div class="row" v-for="(item, index) in checkList" v-if="item.use" :key="index">
          <span class="row-name">{{item.name}}</span>
          <span @click="doNav(item)" class="row-region">{{item.cavern}}</span>
          <yt-count @change="changeList(item)" @add="doStart" :max="item.total" v-model="item.use"></yt-count>
        </div>
      </div>
    </yt-shopCart>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  export default {
    data: () => ({
      totalCount: 20,
      totalCategory: 3
    })
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .logo
    width 100%
    height 100%
    border-radius 50%
    text-align center
    background: #2b343c
    &.is-highlight
      background: rgb(0, 160, 220)
      .logo-icon
        color: #fff

    &-icon
      line-height 44px
      font-size 26px
      color: #80858a

    &-badge
      top 5px
      left 80%

    &-content
      width 100%
      height 100%
      display flex

    &-num
      position relative
      top -2px
      display inline-block
      vertical-align middle
      margin 0 5px
      font-size 32px
      &.is-highlight
        color yellow

    &-desc
      line-height 48px
      font-size 14px
      flex 1

    &-btn
      flex 0 0 105px
      width 105px
      &.not-enough
        color #cccccc
        border 1px solid #2c3c4d
        background #2c3c4d
      &.enough
        color #ffffff
        border 1px solid #00b43c
        background #00b43c
</style>
