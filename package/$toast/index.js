/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import toast from './index.vue'

let toastPool = []
let getAnInstance = () => {
  if (toastPool.length > 0) {
    return toastPool[0]
  }
  const ToastConstructor = Vue.extend(toast)
  let instance = new ToastConstructor({
    el: document.createElement('div')
  })
  toastPool.push(instance)
  return instance
}

export function Toast() {
  let options = arguments
  let instance = getAnInstance()
  document.body.appendChild(instance.$el)
  Vue.nextTick(function () {
    instance.show(...options)
  })
  return instance
}
