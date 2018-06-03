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
      aaa: 'Welcome to Your Vue.js App'
    }
  }
}
