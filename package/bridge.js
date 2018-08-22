import { bus } from './index'
import dsBridge from 'dsbridge'

export default {
  scannerCode(callback) {
    dsBridge.call('scannerCode', null, callback)
  },
  SendMsg(options) {
    dsBridge.call('sendMsg', options)
  },
  CallPhone(tel) {
    dsBridge.call('callPhone', tel)
  },
  PreviewFile(options) {
    dsBridge.call('previewFile', {
      title: options.title,
      url: options.url
    })
  },
  PreviewImg(cur, list) {
    dsBridge.call('previewImg', { cur, list })
  },
  Play(url) {
    dsBridge.call('play', { url })
  },
  SpeechToText(callback) {
    dsBridge.call('speechToText', null, callback)
  },
  TextToSpeech(text) {
    dsBridge.call('textToSpeech', text)
  },
  Quit() {
    dsBridge.call('quit', null)
  },
  Live(url) {
    dsBridge.call('live', { url })
  },
  PlayLive(url) {
    dsBridge.call('playLive', { url })
  },
  PreviewPdf(options) {
    dsBridge.call('previewPdf', options)
  },
  Download(list, callback) {
    dsBridge.call('download', list, callback)
  },
  ListenBack() {
    dsBridge.register('onBack', function () {
      bus.$emit('onBack')
    })
  },
  ListenResume() {
    dsBridge.register('onResume', function () {
      bus.$emit('onResume')
    })
  }
}
