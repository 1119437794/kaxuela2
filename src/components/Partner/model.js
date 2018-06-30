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
      details: {},
      activeTab: '视频'
    }
  },
  async created () {
    // TODO:
    const { id } = this.$route.query
    if (id === undefined) return this.$router.back()
    const { data: details } = await http.post('/teacher/details', { teacher_id: id })
    this.details = details
  }
}
