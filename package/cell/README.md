# cell单元行
###### 单元格，可用作展示列表信息、表单等。
###
#### 基础用法
```html
  <yt-cell title="标题文字"></yt-cell>
  <yt-cell title="标题文字" value="说明文字"></yt-cell>
```
###
#### 带右箭头
```html
  <yt-cell label="巡检任务" value="管廊日常巡检任务" isLink></yt-cell>
```
###
#### 角标
```html
  <yt-cell label="风险评估项" :badge="{ value: 10 }" isLink></yt-cell>
```
###
#### border
```html
  <yt-cell border="none" label="巡检任务" value="管廊日常巡检任务" isLink></yt-cell>
  <yt-cell border="all" label="巡检任务" value="管廊日常巡检任务" isLink></yt-cell>
  <yt-cell border="half" label="巡检任务" value="管廊日常巡检任务" isLink></yt-cell>
```
###
#### 左文字-右自定义
```html
  <yt-cell border="none" label="任务名称">
    <yt-input v-model="input"></yt-input>
  </yt-cell>
```
###
#### 左右文字+左图标+点击阴影
```html
  <yt-cell border="none" :icon="icon" label="专家列表" value="更多" isLink ripple/>
```
###
#### 左图标自定义
```html
  <yt-cell border="none" label="检查通风扇是否打开" isLink>
    <span class="icon" success slot="icon"></span>
  </yt-cell>
  <yt-cell border="none" label="检查防火窗是否关闭" isLink>
    <span class="icon" error slot="icon"></span>
  </yt-cell>
  <yt-cell border="none" label="检查舱内是否漏水" isLink>
    <span class="icon" slot="icon"></span>
  </yt-cell>
```
