
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
  async created () {
    // 推荐视频
    // const hotRes = await http.post('/index/video')
    // 最新视频
    const latestRes = await http.post('/index/video', { type: 2 })
    this.videos = latestRes.data.data
  }
}
