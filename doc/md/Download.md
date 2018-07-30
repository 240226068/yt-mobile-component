```
  import {Download} from 'yt/plus'
  export default {
    methods: {
      handlerDownload() {
        Download([{
          fileName: '慕课网.apk',
          url: 'https://www.imooc.com/mobile/mukewang.apk'
        }], (res) => {
          if (res) {
            console.log(res)
          }
        })
      }
    }
  }
```
