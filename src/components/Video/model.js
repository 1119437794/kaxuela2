import CourseDesc from './Desc'
import CourseDir from './Dir'

export default {
  name: 'video',
  components: {
    ...require('../common'),
    CourseDesc,
    CourseDir
  },
  data () {
    return {
      aaa: 'Welcome to Your Vue.js App'
    }
  }
}
