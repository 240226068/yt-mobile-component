/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import previewVideo from './index.vue'
let previewVideoPool = []
let getAnInstance = () => {
  if (previewVideoPool.length > 0) {
    return previewVideoPool[0]
  }
  const PreviewVideoConstructor = Vue.extend(previewVideo)
  let instance = new PreviewVideoConstructor({
    el: document.createElement('div')
  })
  previewVideoPool.push(instance)
  return instance
}
export function PreviewVideo(options) {
  let instance = getAnInstance()
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show(options)
  })
  return instance
}
