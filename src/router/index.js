import Vue from 'vue'
import Router from 'vue-router'
// 引入页面级组件
import Home from '@/components/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    }
  ]
})
