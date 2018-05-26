import NavItem from './NavItem'
import VideoItem from './VideoItem'

export default {
  name: 'Index',
  components: {
    ...require('../common'),
    NavItem,
    VideoItem
  },
  data () {
    return {
      navs: new Array(5)
    }
  }
}
