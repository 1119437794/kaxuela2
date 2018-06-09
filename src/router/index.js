import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Pay from '@/components/Pay'
import Video from '@/components/Video'
import Partner from '@/components/Partner'
import Order from '@/components/Order'
import Evaluation from '@/components/Evaluation'
import {
  TopUp,
  PayPage,
  PayOk
} from '@/components/Pay/subPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/pay',
      name: 'TopUp',
      component: Pay,
      children: [
        {
          path: '/',
          component: PayPage
        },
        {
          path: 'topUp',
          component: TopUp
        },
        {
          path: 'payOk',
          component: PayOk
        }]
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/video',
      name: 'Video',
      component: Video
    },
    {
      path: '/evaluation',
      name: 'Evaluation',
      component: Evaluation
    },
    {
      path: '/partner',
      name: 'Partner',
      component: Partner
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
