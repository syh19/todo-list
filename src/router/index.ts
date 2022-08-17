/*
 * @Author: 
 * @Date: 2022-08-17 14:28:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-08-17 16:31:09
 * @Description: 
 */
import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import TodoItem from "@/components/TodoItem.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path:'/test',
    component:TodoItem
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
