# file组件
###### 集上传预览为一体的组件
###
#### 简单使用
###
> **uploadFile**为函数且必须，组件在新增时候调用该函数。该函数接受一个file对象实现上传逻辑，返回一个对象 {url, name}即可
###
```html
<yt-file :uploadFile="uploadFile" v-model="fileList"></yt-file>
```
