# cellSwipe侧滑出操作按钮
###### 侧滑出操作按钮，通常用于删除等交互
###
#### 基础用法
```html
  <template>
    <yt-cellSwipe :data="1" :items="items">
      <p class="row">这是测试内容这是测试内容这是测试内容这是测试内容这是测试内容</p>
    </yt-cellSwipe>
  </template>
  <script>
    export default {
      data() {
        return {
          items: [
            {
              type: 'gray',
              text: '关注',
              click: (data) => {
                console.log(data, '点击了关注')
              }
            },
            {
              type: 'red',
              text: '删除',
              click: (data) => {
                console.log(data, '点击了删除')
              }
            }
          ]
      }
    }
  </script>
```
###
#### 封装了点击确定功能
> 使用此功能要求传入  confirm 和 confirmText, confirm存在时，既认为使用了此功能
####
```html
  <template>
    <yt-cellSwipe :data="3" :items="items2">
      <p class="row">这是测试内容这是测试内容这是测试内容这是测试内容这是测试内容</p>
    </yt-cellSwipe>
  </template>
  <script>
    export default {
      data() {
        return {
          items2: [
            {
              type: 'red',
              text: '删除',
              confirmText: '确定删除',
              confirm: (data) => {
                console.log(data, '点击了确定删除')
              }
            }
          ]
      }
    }
  </script>
```
###
#### 自定义右侧的按钮
```html
  <yt-cellSwipe>
    <p class="row">这是测试内容这是测试内容这是测试内容这是测试内容这是测试内容</p>
    <div class="custom" slot="right">
      <div class="item" @click="handler">自定义</div>
    </div>
  </yt-cellSwipe>
```
