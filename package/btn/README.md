# btn组件
###### 按钮，点击
###
#### 颜色值
###
```html
<yt-btn theme="white">white</yt-btn>
<yt-btn theme="blue">blue</yt-btn>
<yt-btn theme="black">black</yt-btn>
<yt-btn theme="red">red</yt-btn>
<yt-btn theme="green">green</yt-btn>
```
###
#### 朴素值
###
```html
<yt-btn theme="white" plain>plain-white</yt-btn>
<yt-btn theme="blue" plain>plain-blue</yt-btn>
<yt-btn theme="black" plain>plain-black</yt-btn>
<yt-btn theme="red" plain>plain-red</yt-btn>
<yt-btn theme="green" plain>plain-green</yt-btn>
```
###
#### 圆角
###
```html
<yt-btn class="btn" theme="black" round>圆角</yt-btn>
```
###
#### 贴边
###
```html
<yt-btn class="btn" theme="blue" edge>贴边</yt-btn>
```
###
#### 尺寸大小
###
```html
<yt-btn theme="blue" size="normal">提交</yt-btn>
<yt-btn theme="blue" size="medium">提交</yt-btn>
<yt-btn theme="blue" size="small">提交</yt-btn>
<yt-btn theme="blue" size="mini">提交</yt-btn>
```
###
#### 禁用状态
###
```html
<yt-btn disabled theme="white">提交</yt-btn>
<yt-btn disabled theme="blue">提交</yt-btn>
<yt-btn disabled theme="red">提交</yt-btn>
<yt-btn disabled theme="black">提交</yt-btn>
<yt-btn disabled theme="green">提交</yt-btn>
```
###
#### 圆型按钮
###
```html
<yt-btn size="normal" circle icon="iconfont icon-search" theme="blue"></yt-btn>
<yt-btn size="normal" circle icon="iconfont icon-search" theme="black"></yt-btn>
<yt-btn size="normal" circle icon="iconfont icon-search" theme="red"></yt-btn>
<yt-btn size="normal" circle icon="iconfont icon-search" theme="green"></yt-btn>
<yt-btn size="normal" circle icon="iconfont icon-search" theme="white"></yt-btn>
```
###
#### 使用icon  自定义内容
###
```html
<yt-btn size="normal" icon="iconfont icon-search" theme="blue"></yt-btn>
<yt-btn size="normal" icon="iconfont icon-search" theme="blue">搜索</yt-btn>
<yt-btn size="normal" theme="blue">搜索 <i class="iconfont icon-search"></i></yt-btn>
```
###
#### 使用loading 防重复点击  
###
```html
<yt-btn size="block" theme="blue" :loading="submit">提交</yt-btn>
```
