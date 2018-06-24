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
  async created () {
    const { id } = this.$route.query
    const { data: details } = await http.post('/video/details', { course_id: id })
    this.details = details
  }
}
