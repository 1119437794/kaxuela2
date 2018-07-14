
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
          path: '/recurit2',
          name: '招聘'
        }
      ],
      username: '',
      activeNav: '/',
      userinfo: {}
    }
  },
  methods: {
    onNavChange (path) {
      this.activeNav = path
      this.$router.push({ path })
    },
    async goto (path) {
      if (path === 'exit') {
        await http.post('/auth/logout')
        path = '/login'
        localStorage.clear()
      }
      this.$router.push({ path })
    }
  },
  async created () {
    // 获取登录用户名
    this.username = localStorage.getItem('username')
    this.activeNav = location.pathname.replace('#', '')

    if (new Date() < localStorage.expires) {
      const res = await http.post('/public/userinfo')
      const userinfo = (res && res.data) || {}
      this.userinfo = userinfo
    } else {
      localStorage.clear()
    }
  }
}
