import Vue from 'vue'
import Router from 'vue-router'
// 导入Login组件
const Login = () => import('@/components/Login')
// 导入Home组件
const Home = () => import('@/components/Home')
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
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    }
  ]
})
