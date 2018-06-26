
export default {
  name: 'MyCollect',
  components: {
    ...require('../common')
  },
  data () {
    return {
      collected: [],
      username: ''
    }
  },
  async created () {
    this.username = localStorage.username
    // 我的收藏
    const collected = await http.post('/user/attention')
    console.log(collected.data.data)
    this.collected = collected.data.data
  }
}
