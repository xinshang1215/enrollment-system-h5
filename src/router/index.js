/*
 * @Author: M.M
 * @Date:   2020-08-31 14:27:44
 * @Last Modified by:   M.M
 * @Last Modified time: 2020-09-04 14:17:02
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  
]

const router = new VueRouter({
  routes
})

export default router
