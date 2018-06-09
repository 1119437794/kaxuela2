import NavItem from './NavItem'

export default {
  name: 'Index',
  components: {
    ...require('../common'),
    NavItem
  },
  data () {
    return {
      navs: new Array(5)
    }
  }
}
