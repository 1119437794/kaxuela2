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
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
