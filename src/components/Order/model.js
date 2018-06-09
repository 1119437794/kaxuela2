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
    }
  }
}
