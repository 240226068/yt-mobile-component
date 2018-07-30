/**
 * Created by mas on 2018/3/17.
 */
import Router from 'vue-router'

Router.prototype.$isBack = false
Router.prototype.$back = function (index = -1) {
  this.$isBack = true
  this.go(index)
}
Router.prototype.$push = function (options) {
  this.$isBack = false
  this.push(options)
}
export { Router }
