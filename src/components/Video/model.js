import CourseDesc from './Desc'

export default {
  name: 'video',
  components: {
    ...require('../common'),
    CourseDesc
  },
  data () {
    return {
      aaa: 'Welcome to Your Vue.js App'
    }
  }
}
