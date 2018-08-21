# popup弹出层组件
###### 弹出层 通常用于包裹自定义内容
###
#### 基本用法
```html
  <template>
    <yt-page>
      <yt-cell label="打开弹出层" @click="bottom = true"></yt-cell>
      <yt-popup pos="bottom" v-model="bottom">
        <div> 这里是自定义内容 </div>
      </yt-popup>
    </yt-page>
  </template>
  <script>
    export default {
      data() {
        return {
          bottom: false
        }
      }
    }
  </script>
```
###
#### 结合page组件的slot="alert"使用
```html
  <template>
    <yt-page>
      <yt-cell label="打开弹出层" @click="bottom = true"></yt-cell>
      <yt-popup slot="alert" pos="bottom" v-model="bottom">
        <div> 这里是自定义内容 </div>
      </yt-popup>
    </yt-page>
  </template>
  <script>
    export default {
      data() {
        return {
          bottom: false
        }
      }
    }
  </script>
```
###
#### 使用fixed铺满全屏
```html
  <template>
    <yt-page>
      <yt-cell label="打开弹出层" @click="bottom = true"></yt-cell>
      <yt-popup pos="bottom" v-model="bottom" fixed>
        <div> 这里是自定义内容 </div>
      </yt-popup>
    </yt-page>
  </template>
  <script>
    export default {
      data() {
        return {
          bottom: false
        }
      }
    }
  </script>
```
###
#### 不显示mask
```html
  <template>
    <yt-page>
      <yt-cell label="打开弹出层" @click="bottom = true"></yt-cell>
      <yt-popup pos="bottom" v-model="bottom" :mask="false" fixed>
        <div> 这里是自定义内容 </div>
      </yt-popup>
    </yt-page>
  </template>
  <script>
    export default {
      data() {
        return {
          bottom: false
        }
      }
    }
  </script>
```
