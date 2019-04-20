import Vue from 'vue'
import Router from 'vue-router'
// 导入Login组件
const Login = () => import('@/components/Login')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
