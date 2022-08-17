/*
 * @Author: 
 * @Date: 2022-08-17 14:28:46
 * @LastEditors: 
 * @LastEditTime: 2022-08-17 14:51:20
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/element'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
