# collapse折叠器
###### 折叠面板
###
#### icon在左侧
####
> **align** 可取值 **left** 或者 **right** 控制小icon在左侧还是右侧
###
```html
  <yt-collapse align="left" v-model="active0" :list="list0">
    <div slot-scope="props">
      {{props.body}}
    </div>
  </yt-collapse>
```
###
#### 单个折叠面板
####
> **v-model** 取值类型为boolean时，按单个折叠面板处理。**list**的长度为1
###
```html
  <yt-collapse v-model="active" :list="list">
    <div slot-scope="props">
      {{props.body}}
    </div>
  </yt-collapse>
```
###
#### 多个折叠面板
####
> **v-model** 取值类型为array。 **list**的长度可以大于1,
> **accordion**可指定是否为手风琴模式。既只打开一个折叠面板
###
```html
<yt-collapse :accordion="false" v-model="active3" :list="list3">
  <div slot-scope="props">
    {{props.body}}
  </div>
</yt-collapse>
```
###
#### 手风琴模式
####
> **accordion**可指定是否为手风琴模式。默认为true。
###
```html
<yt-collapse :accordion="false" v-model="active3" :list="list3">
  <div slot-scope="props">
    {{props.body}}
  </div>
</yt-collapse>
```
