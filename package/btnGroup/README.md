# btnGroup
###### 包裹btn组件
###
> 基础使用
###
```html
<yt-btn-group :shadow="false">
  <yt-btn theme="white">重置</yt-btn>
  <yt-btn>确定</yt-btn>
</yt-btn-group>
```
###
> 使用阴影
###
```html
<yt-btn-group shadow>
  <yt-btn theme="white">重置</yt-btn>
  <yt-btn>确定</yt-btn>
</yt-btn-group>
```
###
> 使用border
###
```html
<yt-btn-group edge :shadow="false" border>
  <yt-btn theme="white">重置</yt-btn>
  <yt-btn theme="white">确定</yt-btn>
</yt-btn-group>
```
###
> btn紧挨
###
```html
<yt-btn-group :shadow="false" edge>
  <yt-btn theme="white">取消</yt-btn>
  <yt-btn theme="white">重置</yt-btn>
  <yt-btn theme="white">确定</yt-btn>
</yt-btn-group>
```
###
> 自定义间隔颜色
###
```html
<yt-btn-group :shadow="false" edge edgeBorderColor="#f2f4f6">
  <yt-btn theme="white">取消</yt-btn>
  <yt-btn theme="white">重置</yt-btn>
  <yt-btn theme="white">确定</yt-btn>
</yt-btn-group>
```
