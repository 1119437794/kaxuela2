// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import router from './router'
import ElementUI from 'element-ui'
import Swiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'iview/dist/styles/iview.css'
import 'element-ui/lib/theme-chalk/index.css'
import './style/reset.css'
import './style/common.less'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(Swiper)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
