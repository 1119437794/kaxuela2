import CourseDesc from './Desc'
import CourseDir from './Dir'
import Comment from './Comment'

export default {
  name: 'video',
  components: {
    ...require('../common'),
    CourseDesc,
    CourseDir,
    Comment
  },
  data () {
    return {
      details: {},
      activeTab: '课程概述'
    }
  },
  methods: {
    // 详情
    async getDetails () {
      const { id } = this.$route.query
      const { data: details } = await http.post('/video/details', { course_id: id })
      this.details = details
    },
    // 收藏课程视频
    async collect () {
      const { id } = this.$route.query
      if (this.details.course_is_collect) return
      await http.post('/public/collect', { course_id: id })
      this.getDetails()
    },
    gotoPay () {
      this.$router.push({
        path: '/pay',
        query: { price: this.details.money }
      })
    },
    // 关注老师
    async attention (isAttention) {
      await http.post('/public/attention', {
        p_user_id: this.details.user.id,
        type: isAttention ? 2 : 1
      })
      this.getDetails()
    },
    gotoPaly () {
      this.$router.push({ path: `/play?id=${this.details.id}` })
    }
  },
  created () {
    this.getDetails()
  },
  watch: {
    '$route.query' () {
      this.getDetails()
    }
  }
}
