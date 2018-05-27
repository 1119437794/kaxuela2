import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import TopUp from '@/components/TopUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/topUp',
      name: 'TopUp',
      component: TopUp
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
