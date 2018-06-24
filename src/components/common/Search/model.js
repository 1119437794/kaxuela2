export default {
  name: 'Search',
  data () {
    return {
      hot: []
    }
  },
  async created () {
    const { data: hot } = await http.post('/public/keywords')
    this.hot = hot
  }
}
