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
      activeTab: '视频'
    }
  }
}
