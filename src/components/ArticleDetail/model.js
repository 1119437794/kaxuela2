
export default {
  name: 'ArticleDetail',
  components: {
    ...require('../common')
  },
  data () {
    return {
      details: {
        user: {
          fudao: [],
          course: [],
          news: []
        },
        newscomment: []
      },
      lists: [],
      comment: '',
      userinfo: {}
    }
  },
  computed: {
    isLogin () {
      return localStorage.token && localStorage.username
    }
  },
  methods: {
    async collectArticle () {
      const { id } = this.$route.query
      await http.post('/news/collect', { article_id: +id })
    },
    async collectTeacher () {
      const { id, is_attention: attention } = this.details.user
      await http.post('/public/attention', {
        p_user_id: id,
        type: attention ? 2 : 1
      })
      this.getDetails()
    },
    async getDetails () {
      const { id } = this.$route.query
      const { data: details } = await http.post('/news/details', { article_id: id })
      this.details = details
    },
    gotoPage (path) {
      this.$router.push({ path: `/${path}` })
    },
    async submitComment () {
      if (!this.comment) return
      await http.post('/news/comment', {
        article_id: this.details.id,
        type: 1,
        // parent_id,
        content: this.comment
      })
      this.comment = ''
      this.getDetails()
    }
  },
  async created () {
    // 文章详情
    this.getDetails()

    // 文章列表
    const { data: userinfo } = await http.post('/public/userinfo')
    this.userinfo = userinfo
  }
}
