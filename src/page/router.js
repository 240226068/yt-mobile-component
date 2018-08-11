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
    path: '/cell',
    component: () => import('./cell')
  },
  {
    path: '/swipeCell',
    component: () => import('./swipeCell')
  },
  {
    path: '/badge',
    component: () => import('./badge')
  },
  {
    path: '/split',
    component: () => import('./split')
  }
]
export default new Router({ routes })
