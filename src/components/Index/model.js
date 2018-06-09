import NavItem from './NavItem'

export default {
  name: '首页',
  components: {
    ...require('../common'),
    NavItem
  },
  data () {
    return {
      navs: new Array(5),
      activeVideoType: '热门视频'
    }
  }
}
