
export default {
  name: 'AllVideo',
  components: {
    ...require('../common')
  },
  data () {
    return {
      videos: []
    }
  },
  methods: {
    async search () {
      const { data: searchRes } = await http.post('/index/video', {
        keyword: this.$route.query.keyword
      })
      this.videos = searchRes.data
    }
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
  },
  watch: {
    '$route.query' () {
      this.search()
    }
  }
}
