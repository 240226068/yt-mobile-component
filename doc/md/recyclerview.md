### 回收利用
<img src="/docs/assets/recyclerview-demo.gif" width = "360" height = "602" alt="图片名称" align=center />

// Item组件
```
<style>
  .mi-item {
    padding: 0 0 3px;
    background: #fff;
    width: 100%;
    list-style: none;
  }

  .mi-item::after {
    content: "";
    position: absolute;
    bottom: 1.5px;
    left: 150px;
    right: 0;
    border-bottom: 1px solid #e4e4e4;
  }

  .version-item {
    display: flex;
    display: -webkit-box;
    box-align: center;
    -webkit-box-align: center;
    width: 100%;
  }

  .version-item-img {
    width: 180px;
    height: 180px;
    position: relative;
  }

  .version-item-img img {
    width: 100%;
  }

  .version-item .version-item-intro {
    -webkit-box-flex: 1;
    box-flex: 1;
    display: block;
    padding: 0 15px 5px;
  }

  .version-item .version-item-intro .version-item-name {
    font-size: 14px;
    color: rgba(0, 0, 0, .87);
    margin-bottom: 8px;
  }

  .version-item .version-item-intro .version-item-brief {
    font-size: 12px;
    color: rgba(0, 0, 0, .54);
    margin-bottom: 8px;
    line-height: 15px;
    overflow: hidden;
  }

  .version-item-brief p {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all;
  }

  .version-item .version-item-intro .version-item-intro-price {
    font-size: 15px;
    position: relative;
    margin-left: 10px;
  }

  .version-item .version-item-intro span {
    color: #ff6000;
  }
</style>
<template>
  <div class="mi-item" @click="add">
    <a class="version-item">
      <div class="version-item-img">
        <img class="lazy" :src="data.img_url">
      </div>
      <div class="version-item-intro">
        <div class="version-item-name">
          <p>{{data.name}}</p>
        </div>
        <div class="version-item-brief">
          <p>{{ data.product_comment }}</p>
        </div>
        <div class="version-item-intro-price">
          <span>{{ data.price_min }}</span>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
  export default {
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      add (e) {
        e.preventDefault()
        console.log(this.data.name += ' 233')
      }
    }
  }
</script>
```

```
<template>
  <yt-page :leftData="[]" title="recyclerview">
    <yt-recyclerview :top-load-method="pullDown" :bottom-load-method="pullUp" :list="list">
      <Item slot-scope="scope" :data="scope.data"></Item>
    </yt-recyclerview>
  </yt-page>
</template>
<script type="text/ecmascript-6">
  import {delayed} from 'yt'
  import Item from './components/Item.vue'
  const LIST = [
    {
      "id": "1",
      "stand_img_id": "8862271",
      "name": "米家空气净化器Pro",
      "market_price_max": "1499.00",
      "market_price_min": "1499.00",
      "price_max": "1499.00",
      "price_min": "1499.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f11b3f5b4a1df7e9bdfce788b6506ebb.jpg",
      "action": {
        "log_code": "30000001110001001"
      },
      "product_comment": "OLED 显示屏幕 / 激光颗粒物传感器 / 500m³/h颗粒物 CADR / 60㎡适用面积",
      "tag_img": ""
    },
    {
      "id": "2",
      "stand_img_id": "2718284",
      "name": "小米空气净化器2",
      "market_price_max": "699.00",
      "market_price_min": "699.00",
      "price_max": "699.00",
      "price_min": "699.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7ac41c17d544d20044d7f6c3e6ce579a.jpg",
      "action": {
        "log_code": "30000001110002001"
      },
      "product_comment": "全新空气增压系统，净化能力高达310m³/h / 高效360°桶形净化滤芯 / 低分贝，低功耗 / 手机智能控制，一目了然",
      "tag_img": ""
    },
    {
      "id": "3",
      "stand_img_id": "8862454",
      "name": "米家PM2.5检测仪",
      "market_price_max": "399.00",
      "market_price_min": "399.00",
      "price_max": "399.00",
      "price_min": "399.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/563988090779f68e8f709a1ce3c58ea6.jpg",
      "action": {
        "log_code": "30000001110003001"
      },
      "product_comment": "高精度激光传感器 / 一体黑 OLED 屏 / 智能联动 / 轻小便携",
      "tag_img": ""
    },
    {
      "id": "4",
      "stand_img_id": "8859941",
      "name": "空气净化器滤芯 除甲醛增强版",
      "market_price_max": "169.00",
      "market_price_min": "169.00",
      "price_max": "169.00",
      "price_min": "169.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7442b315c1cc06f64700e39212dbf054.jpg",
      "action": {
        "log_code": "30000001110004001"
      },
      "product_comment": "小米空气净化器、小米空气净化器 2、米家空气净化器 Pro 通用 / 阻挡致病细菌 / 有效去除PM2.5 / 有效去除甲醛",
      "tag_img": ""
    },
    {
      "id": "5",
      "stand_img_id": "8859983",
      "name": "空气净化器滤芯",
      "market_price_max": "149.00",
      "market_price_min": "149.00",
      "price_max": "149.00",
      "price_min": "149.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1f9eecd1d0b411315f2e698e953a52d.jpg?bg=BCCBD7",
      "action": {
        "log_code": "30000001110005001"
      },
      "product_comment": "小米空气净化器、小米空气净化器 2、米家空气净化器 Pro 通用 / 3层高效净化悬浮物 / 可吸入颗粒物、甲醛与异味",
      "tag_img": ""
    },
    {
      "id": "6",
      "stand_img_id": "8878121",
      "name": "米家空气净化器滤芯 抗菌版",
      "market_price_max": "159.00",
      "market_price_min": "159.00",
      "price_max": "159.00",
      "price_min": "159.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/627e742506047f3fe2971d4d87e10924.jpg",
      "action": {
        "log_code": "30000001110006001"
      },
      "product_comment": "抗菌率达99%以上 / 过滤PM2.5细颗粒物 / 活性炭有效吸附甲醛",
      "tag_img": ""
    },
    {
      "id": "7",
      "stand_img_id": "8883808",
      "name": "米家车载空气净化器滤芯",
      "market_price_max": "49.00",
      "market_price_min": "49.00",
      "price_max": "49.00",
      "price_min": "49.00",
      "has_store": "0",
      "is_cos": true,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/192b741dd0b17b301bd7955bb5e7a7f5.jpg?bg=65A0B7",
      "action": {
        "log_code": "30000001110007001"
      },
      "product_comment": "【4月6日0点 首卖】</font>PET初效滤网 / H11高效过滤器 / 360°桶形设计",
      "tag_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/89854765948bdb494f85deeab661a53e.png?bg=95C85E"
    },
    {
      "id": "8",
      "stand_img_id": "6700405",
      "name": "USB-C至HDMI多功能转接器",
      "market_price_max": "149.00",
      "market_price_min": "149.00",
      "price_max": "149.00",
      "price_min": "149.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c01573cec4d3363d7efd511cbf7cfbc1.jpg",
      "action": {
        "log_code": "30000001110001001"
      },
      "product_comment": "一举多得的转接器，让你的笔记本更强大 / 4K高清输出 / USB 3.0高速传输 / PD2.0智能充电",
      "tag_img": ""
    },
    {
      "id": "9",
      "stand_img_id": "8863343",
      "name": "小米便携鼠标",
      "market_price_max": "99.00",
      "market_price_min": "99.00",
      "price_max": "99.00",
      "price_min": "99.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6451e09563f5fe44bfc912bc128fceeb.jpg",
      "action": {
        "log_code": "30000001110002001"
      },
      "product_comment": "阳极氧化铝合金外壳+ABS材质 / 蓝牙或2.4G双模式 / 轻薄便携",
      "tag_img": ""
    },
    {
      "id": "10",
      "stand_img_id": "1040014",
      "name": "小米金属鼠标垫",
      "market_price_max": "59.00",
      "market_price_min": "49.00",
      "price_max": "59.00",
      "price_min": "49.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8873564985f8151acdbef39e48ab316c.jpg?bg=C0C4C7",
      "action": {
        "log_code": "30000001110003001"
      },
      "product_comment": "简约、纤薄、时尚 / 航空铝合金 / 专业之选",
      "tag_img": ""
    },
    {
      "id": "11",
      "stand_img_id": "7556964",
      "name": "小米笔记本内胆包12.5英寸",
      "market_price_max": "99.00",
      "market_price_min": "69.00",
      "price_max": "99.00",
      "price_min": "69.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8cac1e6358258a06d8cd2ed4b4226f44.jpg",
      "action": {
        "log_code": "30000001110004001"
      },
      "product_comment": "强力吸附，紧贴爱机每一角落 / 加密麂皮绒里布 / 适装MacBook Air 11寸笔记本及MacBook 12.5寸笔记本",
      "tag_img": ""
    },
    {
      "id": "12",
      "stand_img_id": "1039802",
      "name": "小米鼠标垫加大号",
      "market_price_max": "19.00",
      "market_price_min": "19.00",
      "price_max": "19.00",
      "price_min": "19.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eb425a1dd77653409470fb66b8f8f82a.jpg",
      "action": {
        "log_code": "30000001110005001"
      },
      "product_comment": "大面积，超爽体验 / 材质柔软，不易变形 / 超强抓力，不易滑动 / 简约风格，放在哪里都美观大方",
      "tag_img": ""
    },
    {
      "id": "13",
      "stand_img_id": "8864594",
      "name": "小米笔记本贴纸 13.3英寸",
      "market_price_max": "29.90",
      "market_price_min": "29.90",
      "price_max": "29.90",
      "price_min": "29.90",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7957abb8ffac6dc5e75b124a58895432.jpg",
      "action": {
        "log_code": "30000001110006001"
      },
      "product_comment": "色彩细腻，图案精准 / 防水耐磨，容易操作 / 小米笔记本专用贴纸",
      "tag_img": ""
    },
    {
      "id": "14",
      "stand_img_id": "8868571",
      "name": "小米笔记本内胆包13.3英寸",
      "market_price_max": "99.00",
      "market_price_min": "69.00",
      "price_max": "99.00",
      "price_min": "69.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8cac1e6358258a06d8cd2ed4b4226f44.jpg",
      "action": {
        "log_code": "30000001110007001"
      },
      "product_comment": "强力吸附，紧贴爱机每一角落 / 加密麂皮绒里布 / 至简纤薄  轻松随行无压力",
      "tag_img": ""
    },
    {
      "id": "15",
      "stand_img_id": "8864630",
      "name": "小米笔记本贴纸 12.5英寸",
      "market_price_max": "29.90",
      "market_price_min": "29.90",
      "price_max": "29.90",
      "price_min": "29.90",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1b8a63495fff6861d5485f1d3a843483.jpg",
      "action": {
        "log_code": "30000001110008001"
      },
      "product_comment": "色彩细腻，图案精准 / 防水耐磨，容易操作 / 小米笔记本专用贴纸",
      "tag_img": ""
    },
    {
      "id": "16",
      "stand_img_id": "8883766",
      "name": "小米无线鼠标",
      "market_price_max": "69.00",
      "market_price_min": "69.00",
      "price_max": "69.00",
      "price_min": "69.00",
      "has_store": "0",
      "is_cos": true,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/747bdc5fe4ae9976ac05e8af1eb4c52e.jpg?bg=BAC6A4",
      "action": {
        "log_code": "30000001110009001"
      },
      "product_comment": "2.4G高速传输 / 1200dpi 精准定位 / 一键“后退”* / 耐脏亲肤涂层 / 人体工学设计 ",
      "tag_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/89854765948bdb494f85deeab661a53e.png?bg=95C85E"
    },
    {
      "id": "17",
      "stand_img_id": "8884114",
      "name": "悦米机械键盘",
      "market_price_max": "299.00",
      "market_price_min": "299.00",
      "price_max": "299.00",
      "price_min": "299.00",
      "has_store": "0",
      "is_cos": true,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dd4e70d66276839ed73d9a9b897d4859.jpg?bg=FFFFFF",
      "action": {
        "log_code": "30000001110010001"
      },
      "product_comment": "87键 / 铝合金机身 / TTC 红轴 / 简约百搭",
      "tag_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/89854765948bdb494f85deeab661a53e.png?bg=95C85E"
    },
    {
      "id": "18",
      "stand_img_id": "8880692",
      "name": "小米USB-C电源适配器（45W）",
      "market_price_max": "99.00",
      "market_price_min": "99.00",
      "price_max": "99.00",
      "price_min": "99.00",
      "has_store": "0",
      "is_cos": true,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/648060ed1a8ef00f5756679ef7ba6971.jpg",
      "action": {
        "log_code": "30000001110011001"
      },
      "product_comment": "PD2.0 协议 / 精致小巧 / 可为 QC3.0 设备充电 / 附赠USB-C to USB-C数据线\n",
      "tag_img": ""
    },
    {
      "id": "19",
      "stand_img_id": "1040014",
      "name": "小米金属鼠标垫",
      "market_price_max": "59.00",
      "market_price_min": "49.00",
      "price_max": "59.00",
      "price_min": "49.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8873564985f8151acdbef39e48ab316c.jpg?bg=C0C4C7",
      "action": {
        "log_code": "30000001110003001"
      },
      "product_comment": "简约、纤薄、时尚 / 航空铝合金 / 专业之选",
      "tag_img": ""
    },
    {
      "id": "20",
      "stand_img_id": "1039802",
      "name": "小米鼠标垫加大号",
      "market_price_max": "19.00",
      "market_price_min": "19.00",
      "price_max": "19.00",
      "price_min": "19.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eb425a1dd77653409470fb66b8f8f82a.jpg",
      "action": {
        "log_code": "30000001110005001"
      },
      "product_comment": "大面积，超爽体验 / 材质柔软，不易变形 / 超强抓力，不易滑动 / 简约风格，放在哪里都美观大方",
      "tag_img": ""
    },
    {
      "id": "21",
      "stand_img_id": "2718284",
      "name": "小米空气净化器2",
      "market_price_max": "699.00",
      "market_price_min": "699.00",
      "price_max": "699.00",
      "price_min": "699.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7ac41c17d544d20044d7f6c3e6ce579a.jpg",
      "action": {
        "log_code": "30000001110002001"
      },
      "product_comment": "全新空气增压系统，净化能力高达310m³/h / 高效360°桶形净化滤芯 / 低分贝，低功耗 / 手机智能控制，一目了然",
      "tag_img": ""
    },
    {
      "id": "22",
      "stand_img_id": "8862454",
      "name": "米家PM2.5检测仪",
      "market_price_max": "399.00",
      "market_price_min": "399.00",
      "price_max": "399.00",
      "price_min": "399.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/563988090779f68e8f709a1ce3c58ea6.jpg",
      "action": {
        "log_code": "30000001110003001"
      },
      "product_comment": "高精度激光传感器 / 一体黑 OLED 屏 / 智能联动 / 轻小便携",
      "tag_img": ""
    },
    {
      "id": "23",
      "stand_img_id": "8859941",
      "name": "空气净化器滤芯 除甲醛增强版",
      "market_price_max": "169.00",
      "market_price_min": "169.00",
      "price_max": "169.00",
      "price_min": "169.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7442b315c1cc06f64700e39212dbf054.jpg",
      "action": {
        "log_code": "30000001110004001"
      },
      "product_comment": "小米空气净化器、小米空气净化器 2、米家空气净化器 Pro 通用 / 阻挡致病细菌 / 有效去除PM2.5 / 有效去除甲醛",
      "tag_img": ""
    },
    {
      "id": "24",
      "stand_img_id": "8859983",
      "name": "空气净化器滤芯",
      "market_price_max": "149.00",
      "market_price_min": "149.00",
      "price_max": "149.00",
      "price_min": "149.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c1f9eecd1d0b411315f2e698e953a52d.jpg?bg=BCCBD7",
      "action": {
        "log_code": "30000001110005001"
      },
      "product_comment": "小米空气净化器、小米空气净化器 2、米家空气净化器 Pro 通用 / 3层高效净化悬浮物 / 可吸入颗粒物、甲醛与异味",
      "tag_img": ""
    },
    {
      "id": "25",
      "stand_img_id": "8878121",
      "name": "米家空气净化器滤芯 抗菌版",
      "market_price_max": "159.00",
      "market_price_min": "159.00",
      "price_max": "159.00",
      "price_min": "159.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/627e742506047f3fe2971d4d87e10924.jpg",
      "action": {
        "log_code": "30000001110006001"
      },
      "product_comment": "抗菌率达99%以上 / 过滤PM2.5细颗粒物 / 活性炭有效吸附甲醛",
      "tag_img": ""
    },
    {
      "id": "26",
      "stand_img_id": "8883808",
      "name": "米家车载空气净化器滤芯",
      "market_price_max": "49.00",
      "market_price_min": "49.00",
      "price_max": "49.00",
      "price_min": "49.00",
      "has_store": "0",
      "is_cos": true,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/192b741dd0b17b301bd7955bb5e7a7f5.jpg?bg=65A0B7",
      "action": {
        "log_code": "30000001110007001"
      },
      "product_comment": "【4月6日0点 首卖】</font>PET初效滤网 / H11高效过滤器 / 360°桶形设计",
      "tag_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/89854765948bdb494f85deeab661a53e.png?bg=95C85E"
    },
    {
      "id": "27",
      "stand_img_id": "6700405",
      "name": "USB-C至HDMI多功能转接器",
      "market_price_max": "149.00",
      "market_price_min": "149.00",
      "price_max": "149.00",
      "price_min": "149.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c01573cec4d3363d7efd511cbf7cfbc1.jpg",
      "action": {
        "log_code": "30000001110001001"
      },
      "product_comment": "一举多得的转接器，让你的笔记本更强大 / 4K高清输出 / USB 3.0高速传输 / PD2.0智能充电",
      "tag_img": ""
    },
    {
      "id": "28",
      "stand_img_id": "8863343",
      "name": "小米便携鼠标",
      "market_price_max": "99.00",
      "market_price_min": "99.00",
      "price_max": "99.00",
      "price_min": "99.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/6451e09563f5fe44bfc912bc128fceeb.jpg",
      "action": {
        "log_code": "30000001110002001"
      },
      "product_comment": "阳极氧化铝合金外壳+ABS材质 / 蓝牙或2.4G双模式 / 轻薄便携",
      "tag_img": ""
    },
    {
      "id": "29",
      "stand_img_id": "1040014",
      "name": "小米金属鼠标垫",
      "market_price_max": "59.00",
      "market_price_min": "49.00",
      "price_max": "59.00",
      "price_min": "49.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8873564985f8151acdbef39e48ab316c.jpg?bg=C0C4C7",
      "action": {
        "log_code": "30000001110003001"
      },
      "product_comment": "简约、纤薄、时尚 / 航空铝合金 / 专业之选",
      "tag_img": ""
    },
    {
      "id": "30",
      "stand_img_id": "7556964",
      "name": "小米笔记本内胆包12.5英寸",
      "market_price_max": "99.00",
      "market_price_min": "69.00",
      "price_max": "99.00",
      "price_min": "69.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8cac1e6358258a06d8cd2ed4b4226f44.jpg",
      "action": {
        "log_code": "30000001110004001"
      },
      "product_comment": "强力吸附，紧贴爱机每一角落 / 加密麂皮绒里布 / 适装MacBook Air 11寸笔记本及MacBook 12.5寸笔记本",
      "tag_img": ""
    },
    {
      "id": "31",
      "stand_img_id": "1039802",
      "name": "小米鼠标垫加大号",
      "market_price_max": "19.00",
      "market_price_min": "19.00",
      "price_max": "19.00",
      "price_min": "19.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/eb425a1dd77653409470fb66b8f8f82a.jpg",
      "action": {
        "log_code": "30000001110005001"
      },
      "product_comment": "大面积，超爽体验 / 材质柔软，不易变形 / 超强抓力，不易滑动 / 简约风格，放在哪里都美观大方",
      "tag_img": ""
    },
    {
      "id": "32",
      "stand_img_id": "8864594",
      "name": "小米笔记本贴纸 13.3英寸",
      "market_price_max": "29.90",
      "market_price_min": "29.90",
      "price_max": "29.90",
      "price_min": "29.90",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/7957abb8ffac6dc5e75b124a58895432.jpg",
      "action": {
        "log_code": "30000001110006001"
      },
      "product_comment": "色彩细腻，图案精准 / 防水耐磨，容易操作 / 小米笔记本专用贴纸",
      "tag_img": ""
    },
    {
      "id": "33",
      "stand_img_id": "8868571",
      "name": "小米笔记本内胆包13.3英寸",
      "market_price_max": "99.00",
      "market_price_min": "69.00",
      "price_max": "99.00",
      "price_min": "69.00",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/8cac1e6358258a06d8cd2ed4b4226f44.jpg",
      "action": {
        "log_code": "30000001110007001"
      },
      "product_comment": "强力吸附，紧贴爱机每一角落 / 加密麂皮绒里布 / 至简纤薄  轻松随行无压力",
      "tag_img": ""
    },
    {
      "id": "34",
      "stand_img_id": "8864630",
      "name": "小米笔记本贴纸 12.5英寸",
      "market_price_max": "29.90",
      "market_price_min": "29.90",
      "price_max": "29.90",
      "price_min": "29.90",
      "has_store": "1",
      "is_cos": false,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/1b8a63495fff6861d5485f1d3a843483.jpg",
      "action": {
        "log_code": "30000001110008001"
      },
      "product_comment": "色彩细腻，图案精准 / 防水耐磨，容易操作 / 小米笔记本专用贴纸",
      "tag_img": ""
    },
    {
      "id": "35",
      "stand_img_id": "8883766",
      "name": "小米无线鼠标",
      "market_price_max": "69.00",
      "market_price_min": "69.00",
      "price_max": "69.00",
      "price_min": "69.00",
      "has_store": "0",
      "is_cos": true,
      "img_url": "http://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/747bdc5fe4ae9976ac05e8af1eb4c52e.jpg?bg=BAC6A4",
      "action": {
        "log_code": "30000001110009001"
      },
      "product_comment": "2.4G高速传输 / 1200dpi 精准定位 / 一键“后退”* / 耐脏亲肤涂层 / 人体工学设计 ",
      "tag_img": "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/89854765948bdb494f85deeab661a53e.png?bg=95C85E"
    }
  ]
  export default {
    name: 'yt-recyclerView',
    components: {
      Item
    },
    data() {
      return {
        list: LIST.concat(LIST, LIST, LIST, LIST, LIST)
      }
    },
    methods: {
      async pullDown(name, skipCount) {
        await delayed(1500)
        this.list.reverse()
        return this.list
      },
      async pullUp(name, skipCount) {
        await delayed(1500)
        return LIST
      }
    }
  }
</script>
<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
</style>

```
