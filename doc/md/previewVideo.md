预览视频。

<img src="/docs/assets/previewVideo-service.gif" width = "360" height = "602" alt="图片名称" align=center />

```vue
  <template>
    <yt-page title="previewVideo" :leftData="[]">
      <yt-btn @click="handlerPreview">播放视频</yt-btn>
    </yt-page>
  </template>
  <script type="text/ecmascript-6">
    import {PreviewVideo} from 'yt'
    export default {
      methods: {
        handlerPreview () {
          PreviewVideo({
            current: 1,
            list: [
              {
                title: '视频一',
                url: 'http://222.73.132.154/variety.tc.qq.com/AxOYV4xMPWHMWOGwSaOAGzfM5XbwURk4nqvdv-fakHv4/o0200u0guw2.p201.1.mp4?vkey=0017D54219A0075C87A50EDA4FD3D533DF35C3F04FA43D5C23544D6CDAA2576D7792657754ACC3075AA780D3B8FB77B7859668D854959F9BEBAC8A7361B3C4FCDB3145D1F3F70DBDAA69D8B45C8DBAA12F282CAEAC1DDFF3B0516BFD0FDD53B32183D4299895A1FC060B921ED276913820D42AE8718D826E&platform=10201&sdtfrom=&fmt=shd&level=0'
              },
              {
                title: '视频二',
                url: 'http://222.73.132.154/variety.tc.qq.com/AxOYV4xMPWHMWOGwSaOAGzfM5XbwURk4nqvdv-fakHv4/o0200u0guw2.p201.1.mp4?vkey=0017D54219A0075C87A50EDA4FD3D533DF35C3F04FA43D5C23544D6CDAA2576D7792657754ACC3075AA780D3B8FB77B7859668D854959F9BEBAC8A7361B3C4FCDB3145D1F3F70DBDAA69D8B45C8DBAA12F282CAEAC1DDFF3B0516BFD0FDD53B32183D4299895A1FC060B921ED276913820D42AE8718D826E&platform=10201&sdtfrom=&fmt=shd&level=0'
              },
              {
                title: '视频三',
                url: 'http://222.73.132.154/variety.tc.qq.com/AxOYV4xMPWHMWOGwSaOAGzfM5XbwURk4nqvdv-fakHv4/o0200u0guw2.p201.1.mp4?vkey=0017D54219A0075C87A50EDA4FD3D533DF35C3F04FA43D5C23544D6CDAA2576D7792657754ACC3075AA780D3B8FB77B7859668D854959F9BEBAC8A7361B3C4FCDB3145D1F3F70DBDAA69D8B45C8DBAA12F282CAEAC1DDFF3B0516BFD0FDD53B32183D4299895A1FC060B921ED276913820D42AE8718D826E&platform=10201&sdtfrom=&fmt=shd&level=0'
              }
            ]
          })
        }
      }
    }
  </script>
  <style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  </style>
```
