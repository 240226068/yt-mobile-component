/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import confirm from './index.vue'

let confirmPool = []
let getAnInstance = () => {
  if (confirmPool.length > 0) {
    return confirmPool[0]
  }
  const ConfirmConstructor = Vue.extend(confirm)
  let instance = new ConfirmConstructor({
    el: document.createElement('div')
  })
  confirmPool.push(instance)
  return instance
}

export function Confirm(options) {
  let instance = getAnInstance()
  document.body.appendChild(instance.$el)
  return new Promise((resolve, reject) => {
    Vue.nextTick(function () {
      instance.show(options).then(() => resolve(true), () => resolve(false))
    })
  })
}
