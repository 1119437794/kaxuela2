
export default {
  name: 'Article',
  components: {
    ...require('../common')
  },
  data () {
    return {
      article: []
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
  }
}
