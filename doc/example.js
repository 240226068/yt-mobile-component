import Vue from 'vue'
import Example from './Example.vue'
import router from './example/router'
import yt from 'yt'
import 'yt/style/theme/LightBlue.css'

Vue.use(yt)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Example/>',
  components: {Example}
})
