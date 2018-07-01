import Video from './Video'
import Course from './Course'

export default {
  name: 'partner',
  components: {
    ...require('../common'),
    Video,
    Course
  },
  data () {
    return {
      details: {
        course: [],
        news: []
      },
      activeTab: '视频'
    }
  },
  methods: {
    async care () {
      const { id, is_attention: attention } = this.details
      await http.post('/public/attention', {
        p_user_id: id,
        type: attention ? 2 : 1
      })
      this.getDetails()
    },
    async getDetails () {
      const { data: details } = await http.post('/teacher/details', { teacher_id: this.$route.query.id })
      details.news = details.news.map(item => ({ puser: item }))
      this.details = details
    }
  },
  created () {
    if (this.$route.query.id === undefined) return this.$router.back()
    this.getDetails()
  }
}
