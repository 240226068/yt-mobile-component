/**
 * Created by mas on 2018/5/1.
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import('./index')
  },
  {
    path: '/page',
    component: () => import('./page')
  }
]
export default new Router({ routes })
