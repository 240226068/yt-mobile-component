# loading
###### 彈出loading框 防止用戶操作 loading組件跟**promise**相结合实现，实现自动关闭。loading组件默认延迟**500ms**打开
###
> this调用
###
```js
export default {
  methods: {
    async doLoading() {
      let res = await this.$Loading(delayed(3000))
      console.log(res, '延迟了三秒')
    }
  }
}
```
###
> 单个promise 延迟三秒后输出
###
```js
import { Loading, delayed } from 'yt-mobile'
export default {
  methods: {
    async doLoading() {
      let res = await Loading(delayed(3000))
      console.log(res, '延迟了三秒')
    }
  }
}
```
###
> 多个promise 全部执行完以后，loading消失
###
```js
import { Loading, delayed } from 'yt-mobile'
export default {
    methods: {
      async doLoading() {
        let p = [
          delayed(1000),
          delayed(4000)
        ]
        let res = await Loading(...p)
        console.log(res, '延迟了四秒')
      }
    }
  }
```
