// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入elementui - js
import ElementUI from 'element-ui'
// 导入elementui - css
import 'element-ui/lib/theme-chalk/index.css'
// 引入通用样式
import '@/assets/base.css'
// 引入axios
import axios from 'axios'
Vue.use(ElementUI)
Vue.config.productionTip = false
// 把axios放到vue的原型上,将来所有的vue实例都可以用
Vue.prototype.axios = axios
// 给axios配置默认值
// console.log(localStorage.getItem('token'))
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 设置请求头
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token')
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
