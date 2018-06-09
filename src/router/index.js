import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'
import Pay from '@/components/Pay'
import Video from '@/components/Video'
import Partner from '@/components/Partner'
import Order from '@/components/Order'
import AllVideo from '@/components/AllVideo'
import SearchDaNiu from '@/components/SearchDaNiu'
import Article from '@/components/Article'
import ArticleDetail from '@/components/ArticleDetail'
import MyCollect from '@/components/MyCollect'
import MyMessage from '@/components/MyMessage'
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
    },
    {
      path: '/allVideo',
      name: '全部视频',
      component: AllVideo
    },
    {
      path: '/searchDaNiu',
      name: '找大牛',
      component: SearchDaNiu
    },
    {
      path: '/article',
      name: '文章',
      component: Article
    },
    {
      path: '/articleDetail',
      name: '文章详情',
      component: ArticleDetail
    },
    {
      path: '/myCollect',
      name: '我的收藏',
      component: MyCollect
    },
    {
      path: '/myMessage',
      name: '我的消息',
      component: MyMessage
    }
  ]
})
