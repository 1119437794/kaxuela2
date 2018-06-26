
export default {
  name: 'Header',
  data () {
    return {
      navs: [
        {
          path: '/',
          name: '首页'
        },
        {
          path: '/allVideo',
          name: '全部视频'
        },
        {
          path: '/searchDaNiu',
          name: '找大牛'
        },
        {
          path: '/article',
          name: '文章'
        },
        {
          path: '/recruit',
          name: '招聘'
        }
      ],
      username: '',
      activeNav: '/'
    }
  },
  methods: {
    onNavChange (path) {
      this.activeNav = path
      this.$router.push({ path })
    },
    goto (path) {
      this.$router.push({ path })
    }
  },
  created () {
    // 获取登录用户名
    this.username = localStorage.getItem('username')
    this.activeNav = location.pathname.replace('#', '')
  }
}
