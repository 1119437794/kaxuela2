
export default {
  name: 'Article',
  components: {
    ...require('../common')
  },
  data () {
    return {
      article: [],
      authors: []
    }
  },
  methods: {
    async care ({ id, is_attention: attention }) {
      await http.post('/public/attention', {
        p_user_id: id,
        type: attention ? 2 : 1
      })
      this.recommend()
    },
    async recommend () {
      const { data: authorRes } = await http.post('/news/recommend')
      this.authors = authorRes.data
    },
    gotoPartner (id) {
      this.$router.push({path: `/partner?id=${id}`})
    }
  },
  async created () {
    // 文章列表
    const { data: articleRes } = await http.post('/news/lists')
    this.article = articleRes.data.map(({
      user: puser, content, title, ...others
    }) => ({
      puser,
      news: { content, title },
      ...others
    }))
    this.recommend()
  }
}
