// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './example/router'
import yt from '../package/index'
import '../package/style/theme/LightBlue.css'
import App from './App'

Vue.use(yt)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
