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
import MyCare from '@/components/MyCare'
import Recurit from '@/components/Recurit'
import VideoPlayer from '@/components/VideoPlayer'
import UserCenter from '@/components/UserCenter'
import Evaluation from '@/components/Evaluation'
import {
  TopUp,
  PayPage,
  PayOk
} from '@/components/Pay/subPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
      name: 'allVideo',
      component: AllVideo
    },
    {
      path: '/searchDaNiu',
      name: 'searchDaNiu',
      component: SearchDaNiu
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/articleDetail',
      name: 'articleDetail',
      component: ArticleDetail
    },
    {
      path: '/myCollect',
      name: 'myCollect',
      component: MyCollect
    },
    {
      path: '/myCare',
      name: 'myCare',
      component: MyCare
    },
    {
      path: '/recurit2',
      name: 'recurit',
      component: Recurit
    },
    {
      path: '/play',
      name: 'play',
      component: VideoPlayer
    },
    {
      path: '/ucenter',
      name: 'ucenter',
      component: UserCenter
    }
  ]
})
