export default {
  name: 'Search',
  data () {
    return {
      hot: [],
      searchKey: ''
      // searchRes: []
    }
  },
  methods: {
    submitSearch () {
      // const { data: searchRes } = await http.post('/index/video', {
      //   keyword: this.searchKey
      // })
      // this.searchRes = searchRes.data
      this.$router.push({path: `/allVideo?keyword=${this.searchKey}`})
    }
  },
  async created () {
    const { data: hot } = await http.post('/public/keywords')
    this.hot = hot
  }
}
