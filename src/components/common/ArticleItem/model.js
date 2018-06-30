export default {
  name: 'ArticleItem',
  props: ['dataSource'],
  methods: {
    gotoDetail () {
      this.$router.push({ path: `/articleDetail?id=${this.dataSource.id}` })
    }
  }
}
