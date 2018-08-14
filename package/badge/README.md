# badge角标
###### 角标通常用于提示消息。
###
#### 文字
```html
  <yt-cell label="文字" isLink>
    <span style="position: relative; padding-right: 10px; margin-right: 20px;">
      测试<yt-badge :value="更多"></yt-badge>
    </span>
  </yt-cell>
```
###
#### 数字
```html
  <yt-cell label="数字" isLink>
    <span style="position: relative; padding-right: 10px; margin-right: 20px;">
      测试<yt-badge :value="20"></yt-badge>
    </span>
  </yt-cell>
```
###
#### 圆点
```html
  <yt-cell label="圆点" isLink>
    <span style="position: relative; padding-right: 10px; margin-right: 20px;">
      测试<yt-badge isDot></yt-badge>
    </span>
  </yt-cell>
```
###
#### 值为数字，有最大值20
```html
  <yt-cell label="数字" isLink>
    <span style="position: relative; padding-right: 10px; margin-right: 20px;">
      测试<yt-badge :value="30" :max="20"></yt-badge>
    </span>
  </yt-cell>
```
