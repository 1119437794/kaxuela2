<<<<<<< HEAD
import { Header, Login } from '../common'

export default {
  name: 'Index',
  components: {
    Header,
    Login
=======
export default {
  name: 'Index',
  components: {
    ...require('../common')
>>>>>>> 8a2f0cae677df571ddeacde5c21976d9627384a3
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
