
export default {
  name: 'ArticleDetail',
  components: {
    ...require('../common')
  },
  data () {
    return {
      details: {},
      lists: []
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
    async collectTeacher ({ id, type }) {
      await http.post('/public/attention', {
        p_user_id: id,
        type
      })
    }
  },
  async created () {
    // 文章详情
    // const { id } = this.$route.query
    // const { data: details } = await http.post('/news/details', { article_id: +id })
    // this.details = details

    // 文章列表
    const { data: listsRes } = await http.post('/news/lists')
    this.lists = listsRes.data
  }
}
