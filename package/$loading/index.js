/**
 * Created by mas on 2018/3/9.
 */
import Vue from 'vue'
import loading from './index.vue'

let loadingPool = []
let getAnInstance = () => {
  if (loadingPool.length > 0) return loadingPool[0]
  const LoadingConstructor = Vue.extend(loading)
  let instance = new LoadingConstructor({ el: document.createElement('div') })
  document.body.appendChild(instance.$el)
  loadingPool.push(instance)
  return instance
}

export function Loading() {
  let instance = getAnInstance()
  let options = arguments
  return new Promise((resolve, reject) => {
    Vue.nextTick(() => {
      instance.load([...options]).then(resolve).catch(reject)
    })
  })
}
