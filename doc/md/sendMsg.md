```
  import {SendMsg} from 'yt/plus'
  export default {
    methods: {
      handlerSend() {
        SendMsg({
          phone: [
            '10086',
            '10010'
          ],
          content: '发给10086和10010的一份情书！ ',
          silent: false    // silent为true时候 发短信采用后台并直接发送; 为false时 调用系统发短信服务并未发送。
        })
      }
    }
  }
```
