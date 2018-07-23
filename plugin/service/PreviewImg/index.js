/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import previewImg from './index.vue'

let previewImgPool = []
let getAnInstance = () => {
  if (previewImgPool.length > 0) {
    return previewImgPool[0]
  }
  const PreviewImgConstructor = Vue.extend(previewImg)
  let instance = new PreviewImgConstructor({
    el: document.createElement('div')
  })
  previewImgPool.push(instance)
  return instance
}
export function PreviewImg(options) {
  let instance = getAnInstance()
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show(options)
  })
  return instance
}
