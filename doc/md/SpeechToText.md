```
  import {SpeechToText} from 'yt/plus'
  export default {
    methods: {
      handlerSpeech() {
        SpeechToText((res) => {
          console.log('识别结果：', res)
        })
      }
    }
  }
```
