import List from './List'

export default {
  name: 'Order',
  components: {
    ...require('../common'),
    List
  },
  data () {
    return {
      activeNav: '全部订单'
    }
  },
  methods: {
    onNavChange (nav) {
      this.activeNav = nav
      if (nav === '我的关注') {
        this.$router.push({path: '/myCare'})
      } else if (nav === '我的收藏') {
        this.$router.push({path: '/myCollect'})
      } else if (nav === '基础信息') {
        this.$router.push({path: '/ucenter'})
      }
    }
  }
}
