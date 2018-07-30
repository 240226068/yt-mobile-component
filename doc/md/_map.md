### 元图地图组件
 以slot的形式添加marker点, marker数组，每个子项必须包含longitude,latitude字段。 _slot字段可选。具体示例如下：
<img src="/docs/assets/map-demo.gif" width = "360" height = "602" alt="图片名称" align=center />


```html
<template>
  <yt-page title="查看地图">
    <yt-map :marker="marker" @ready="ready">
      <span @click="hanlderClick(data)" slot-scope="{data}" class="marker">
        <p class="marker-text">{{data.name}}</p>
        <img class="marker-img" src="./img/shelter.png"/>
      </span>
      <div @click="hanlderClickEmergency(data)" slot="emergency" slot-scope="{data}" class="yt-emergency-map-dot-wrap">
        <div class="yt-emergency-map-dot"></div>
        <div class="yt-emergency-map-pulse"></div>
        <div class="yt-emergency-map-pulse1"></div>
      </div>
    </yt-map>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  const LIST = [
    {
      "_slot": "emergency",
      "longitude": "119.49641435246605",
      "latitude": "36.91754563308386"
    },
    {
      "name": "逃生口A",
      "value": 1,
      "longitude": "119.50264542888463",
      "latitude": "36.90877993764597"
    },
    {
      "name": "逃生口B",
      "value": 2,
      "longitude": "119.50247376734397",
      "latitude": "36.903200935800925"
    },
    {
      "name": "逃生口C",
      "value": 3,
      "longitude": "119.50934022897047",
      "latitude": "36.902170966229534"
    },
    {
      "name": "逃生口D",
      "value": 4,
      "longitude": "119.51234430593206",
      "latitude": "36.89865190352727"
    },
    {
      "name": "逃生口E",
      "value": 5,
      "longitude": "119.51517672135299",
      "latitude": "36.89547616401548"
    },
    {
      "name": "同仁堂",
      "value": 7,
      "longitude": "119.50659364431988",
      "latitude": "36.90418798997351"
    }
  ]
  export default {
    name: 'map-page',
    data() {
      return {
        map: null,
        marker: []
      }
    },
    methods: {
      hanlderClickEmergency(data) {
        this.$router.$push({path: './emergency'})
      },
      hanlderClick(data) {
        this.$Toast({msg: '您点击了' + data.name, type: 'success'})
      },
      ready(map) {
        this.map = map
        this.marker = LIST
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .marker
    text-align center
    &-img
      width 30px
      height 40px
    &-text
      margin-bottom 5px
      white-space nowrap
      color #33ffbb
      font-size 16px
</style>

<style type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  /*地图报警*/
  @keyframes yt-emergency-map-warn {
    0% {
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
      opacity: 0.0;
    }
    25% {
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
      opacity: 0.1;
    }
    50% {
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
      opacity: 0.3;
    }
    75% {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
      opacity: 0.0;
    }
  }

  @keyframes yt-emergency-map-warn1 {
    0% {
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
      opacity: 0.0;
    }
    25% {
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
      opacity: 0.1;
    }
    50% {
      transform: scale(0.3);
      -webkit-transform: scale(0.3);
      opacity: 0.3;
    }
    75% {
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(0.8);
      -webkit-transform: scale(0.8);
      opacity: 0.0;
    }
  }

  @-webkit-keyframes yt-emergency-map-warn {
    0% {
      transform: scale(0);
      -webkit-transform: scale(0);
      opacity: 0.0;
    }
    25% {
      transform: scale(0);
      -webkit-transform: scale(0);
      opacity: 0.1;
    }
    50% {
      transform: scale(0.1);
      -webkit-transform: scale(0.1);
      opacity: 0.3;
    }
    75% {
      transform: scale(0.5);
      -webkit-transform: scale(0.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      -webkit-transform: scale(1);
      opacity: 0.0;
    }
  }

  .yt-emergency-map-dot-wrap {
    width: 150px;
    height: 150px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
  }

  /* 保持大小不变的小圆圈  */
  .yt-emergency-map-dot {
    position: absolute;
    width: 24px;
    height: 24px;
    top: 50%;
    left: 50%;
    margin-top: -14px;
    margin-left: -14px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    background-color: rgba(255, 0, 0, 0.5);
    border: 2px solid red;
    border-radius: 50%;
    z-index: 2;
  }

  /* 产生动画（向外扩散变大）的圆圈  */
  .yt-emergency-map-pulse, .yt-emergency-map-pulse1 {
    position: absolute;
    width: 140px;
    height: 140px;
    top: 50%;
    left: 50%;
    margin-top: -76px;
    margin-left: -76px;
    border: 6px solid red;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    z-index: 1;
    opacity: 0;
    box-shadow: 1px 1px 30px red;
  }

  .yt-emergency-map-pulse {
    background-color: rgba(255, 0, 0, 0.6);
    -webkit-animation: yt-emergency-map-warn 2s ease-out infinite;
    -moz-animation: yt-emergency-map-warn 2s ease-out infinite;
    animation: yt-emergency-map-warn 2s ease-out infinite;
  }

  .yt-emergency-map-pulse1 {
    -webkit-animation: yt-emergency-map-warn1 2s ease-out infinite;
    -moz-animation: yt-emergency-map-warn1 2s ease-out infinite;
    animation: yt-emergency-map-warn1 2s ease-out infinite;
  }
</style>
```
