### buttonTab组件

```html
<template>
  <yt-page title="button-tab-example" wrap-class="wrapClass">
    <yt-cell border="all" class="row" title="两个"/>
    <yt-button-tab class="row-wrap" type="warning" :list="list"></yt-button-tab>
    <yt-button-tab class="row-wrap" type="primary" :list="list"></yt-button-tab>
    <yt-button-tab class="row-wrap" type="success" :list="list"></yt-button-tab>
    <yt-button-tab class="row-wrap" type="danger" :list="list"></yt-button-tab>
    <yt-button-tab class="row-wrap" type="info" :list="list"></yt-button-tab>
    <yt-button-tab class="row-wrap" type="black" :list="list"></yt-button-tab>
    <yt-cell border="all" class="row" title="多个"/>
    <yt-button-tab class="row-wrap" :list="list2"></yt-button-tab>
    <yt-cell border="all" class="row" title="v-model控制选中页"/>
    <yt-button-tab class="row-wrap" @change="change" v-model="page3" :list="list3"></yt-button-tab>
    <yt-cell border="all" class="row" title="选中颜色为红色，未选中为白色"/>
    <yt-button-tab class="row-wrap" activeColor="red" unActiveColor="#fff" :list="list4"></yt-button-tab>
  </yt-page>
</template>
<script type="text/ecmascript-6">
export default {
  name: "button-tab-example",
  data() {
    return {
      list: ["巡检", "维修"],
      list2: ["今日", "本周", "本月"],
      list3: ["待签收", "进行中", "已完成", "已归档"],
      list4: ["推荐", "分享"],
      page3: 1
    };
  },
  methods: {
    change(val) {
      console.log(val, this.page3);
    }
  }
};
</script>
<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
.wrapClass {
  background-color: #fafafa;
}
</style>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
.row-wrap
  margin 10px
</style>

```
