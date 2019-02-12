// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'mint-ui/lib/style.css'
import Vue from 'vue'
import App from './App'
import router from './router'
// 解决手机点击事件延迟
import FastClick from 'fastclick'

import store from './store'

// 加载 UI
import Mint from 'mint-ui'
FastClick.attach(document.body)

Vue.use(Mint)



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, //使用 vue-roter
  store, //使用 vuex 
  components: { App },
  template: '<App/>'
})
