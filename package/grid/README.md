# grid组件
###### 宫格组件，常用与展示系统功能的入口
###
#### 简单使用
```html
  <template>
    <yt-page title="宫格">
      <yt-grid :x="3" :y="5" :list="list">
        <yt-grid-item slot-scope="data" v-bind="data"></yt-grid-item>
      </yt-grid>
    </yt-page>
  </template>
  <script>
    export default {
      data() {
        return {
          list: [
            {
              font: 'yt-icon icon-message',
              badge: { isDot: true },
              text: '待办事项'
            },
            {
              img: require('../img/map.png'),
              badge: { value: 22, max: 10 },
              text: '查看地图'
            }
            ...
          ]
        }
      }
    }
  </script>
```
