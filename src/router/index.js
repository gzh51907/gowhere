import Vue from 'vue'
import Router from 'vue-router'
// 引入页面级组件
import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'
import Week from '@/components/week/Week'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/city',
      component: City
    },
    {
      name: "detaillink",
      path: '/detail/:id',
      component: Detail
    },
    {
      name: 'Week',
      path: '/week/:id',
      component: Week
    }
  ]
})
