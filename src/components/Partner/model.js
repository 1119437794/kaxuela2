import Video from './Video'

export default {
  name: 'partner',
  components: {
    ...require('../common'),
    Video
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
