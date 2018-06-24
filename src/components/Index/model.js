import NavItem from './NavItem'

export default {
  name: '首页',
  components: {
    ...require('../common'),
    NavItem
  },
  data () {
    return {
      category: [],
      banner: {},
      activeVideoType: '热门视频',
      hotVideos: [],
      latestVideos: [],
      teachers: []
    }
  },
  computed: {
    videos () {
      const type = this.activeVideoType
      if (type === '热门视频') {
        return this.hotVideos
      }
      if (type === '最新视频') {
        return this.latestVideos
      }
    }
  },
  async created () {
    // 课程分类列表
    const { data: category } = await http.post('/index/category')
    this.category = category
    // banner列表
    const { data: banner } = await http.post('/index/banner')
    this.banner = banner.pop()
    // 推荐视频
    const hotRes = await http.post('/index/video')
    this.hotVideos = hotRes.data.data
    // 最新视频
    const latestRes = await http.post('/index/video', { type: 2 })
    this.latestVideos = latestRes.data.data
    // 大牛列表
    const teacherRes = await http.post('/index/teacher')
    this.teachers = teacherRes.data.data
  }
}
