import NavItem from './NavItem'
import VideoItem from './VideoItem'
import DaNiu from './DaNiu'

export default {
  name: 'Index',
  components: {
    ...require('../common'),
    NavItem,
    VideoItem,
    DaNiu
  },
  data () {
    return {
      navs: new Array(5)
    }
  }
}
