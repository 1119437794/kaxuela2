
export default {
  name: 'ucenter',
  components: {
    ...require('../common')
  },
  data () {
    return {
      details: []
    }
  },
  methods: {
  },
  async created () {
    const { keyword } = this.$route.query
    if (keyword) {
      this.search()
    } else {
      // 最新视频
      const latestRes = await http.post('/index/video', { type: 2 })
      this.videos = latestRes.data.data
    }
  }
}
