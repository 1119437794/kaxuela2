
export default {
  name: 'MyCollect',
  components: {
    ...require('../common')
  },
  data () {
    return {
      collected: [],
      username: '',
      userinfo: {}
    }
  },
  async created () {
    this.username = localStorage.username
    // 我的收藏
    const collected = await http.post('/user/attention')
    this.collected = collected.data.data

    const { data: userinfo } = await http.post('/public/userinfo')
    this.userinfo = userinfo
  }
}
