import NavItem from './NavItem'
import DaNiu from './DaNiu'

export default {
  name: 'Index',
  components: {
    ...require('../common'),
    NavItem,
    DaNiu
  },
  data () {
    return {
      navs: new Array(5)
    }
  }
}
