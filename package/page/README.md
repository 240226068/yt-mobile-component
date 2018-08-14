# page页面
#### 页面的总体结构
### 简单使用
> 左边头像 , 右边字体icon ,点击icon打开input
###
```html
  <template>
    <yt-page title="这里是标题" @change="change" v-model="key" :input="input" :leftData="leftData" :rightData="rightData">
    </yt-page>
  </template>
  <script>
    export default {
      data() {
        return {
          key: '',
          input: false,
          leftData: [
            {
              avatar: require('../img/avatar.jpg'),
              click: () => {
                console.log('点击了头像')
              }
            }
          ],
          rightData: [
            {
              font: 'iconfont icon-more',
              click: () => {
                this.input = !this.input
              }
            }
          ]
        }
      },
      methods: {
        change() {
          console.log('搜索框文字变化了')
        }
      }
    }
  </script>
```
####
### 使用more，配合使用slot="more"以及buttonTab的实例
```html
<template>
  <yt-page :more.sync="more" :rightData="rightData">
    <ul class="ul" slot="more">
      <li @click="handler(tab)" v-for="tab in TABS" :key="tab">{{tab}}</li>
    </ul>
    <yt-buttonTab :list="list" slot="title"></yt-buttonTab>
  </yt-page>
</template>
<script>
const TABS = {
    manage: '知识库管理',
    video: '视频学习库',
    statics: '知识库统计'
  }
  export default {
    data() {
      return {
        TABS,
        list: [
          {
            text: '推荐'
          },
          {
            text: '分享',
            badge: { value: 20 }
          },
          {
            text: '推荐',
            badge: { value: 20 }
          }
        ],
        more: false,
        rightData: [
          {
            font: 'iconfont icon-more',
            click: () => {
              this.more = !this.more
            }
          }
        ]
      }
    },
    methods: {
      handler(tab) {
        console.log('点击了', tab)
        this.more = false
      }
    }
  }
</script>
```
