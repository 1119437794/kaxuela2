import Video from './Video'
import Course from './Course'
import Article from './Article'

export default {
  name: 'partner',
  components: {
    ...require('../common'),
    Video,
    Course,
    Article
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
