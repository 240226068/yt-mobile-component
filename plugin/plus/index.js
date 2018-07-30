/**
 * Created by mas on 2018/3/12.
 */
import { bus } from '../utils'
import dsBridge from './dsbridge'

/**
 * 打开摄像头识别二维码
 */
export function scannerCode(callback) {
  dsBridge.call('scannerCode', null, callback)
}

/**
 * 调用系统发短信
 * @param options [object]  例如 { silent: false , phone: ['10086', '10010'], content: '测试代码' }
 *   silent为true时候 发短信采用后台发送 为false时 调用系统发短信服务
 */
export function SendMsg(options) {
  dsBridge.call('sendMsg', options)
}

/**
 * 拨打电话
 * @param tel [string]
 */
export function CallPhone(tel) {
  dsBridge.call('callPhone', tel)
}

/**
 * 预览文件
 * @param options  Object 例如 ：{ title: '文件一', url: 'http://222.178.41.222:13302//Files/Faq/1/20180129/b240677e-d8ab-406f-bbff-f84c5cd03f0f.doc'}
 * @constructor
 */
export function PreviewFile(options) {
  dsBridge.call('previewFile', {
    title: options.title,
    url: options.url
  })
}

/**
 * 预览图片
 * @param current [number] 例如 2
 * @param list [Array]  例如 [ 'http://b.zol-img.com.cn/sjbizhi/images/2/320x510/1352891767829.jpg', 'http://image.tianjimedia.com/uploadImages/2012/289/71X94T2PF22Z.jpg', 'http://b.zol-img.com.cn/sjbizhi/images/5/320x510/1372924333667.jpg', 'http://b.zol-img.com.cn/sjbizhi/images/2/320x510/1352891767829.jpg']
 * @constructor
 */
export function PreviewImg(current, list) {
  dsBridge.call('previewImg', {
    cur: current,
    list: list
  })
}

/**
 * 播放视频
 * @param url 视频地址 例如：rtmp://218.92.104.102:8003/live/stream_124
 * @constructor
 */
export function Play(url) {
  dsBridge.call('play', {
    url: url
  })
}

/**
 * 语音识别
 * @param callback 回调函数  返回识别出来的文字
 * @constructor
 */
export function SpeechToText(callback) {
  dsBridge.call('speechToText', null, callback)
}

/**
 * 文字转语音
 * @param text
 */
export function TextToSpeech(text) {
  dsBridge.call('textToSpeech', text);
}

/**
 * 关闭APP
 * @constructor
 */
export function Quit() {
  dsBridge.call('quit', null)
}

/**
 * 直播推流
 * @param url 例如 'rtmp://218.92.104.102:8003/live/test'
 */
export function Live(url) {
  dsBridge.call('live', { url })
}

/**
 * 直播拉流
 * @param url 例如 'rtmp://218.92.104.102:8003/live/test'
 */
export function PlayLive(url) {
  dsBridge.call('playLive', { url })
}

/**
 * pdf预览打印
 * @param options  {title, url}
 */
export function PreviewPdf(options) {
  dsBridge.call('previewPdf', options)
}

/**
 * 文件下载
 * @param list    [{fileName, url}]
 * @param callback
 */
export function Download(list, callback) {
  dsBridge.call('download', list, callback)
}

/**
 * 注册android点击返回键
 */
export function ListenBack() {
  dsBridge.register("onBack", function () {
    bus.$emit('onBack')
  })
}

/**
 * 注册页面激活事件
 */
export function ListenResume() {
  dsBridge.register("onResume", function () {
    bus.$emit('onResume')
  })
}
