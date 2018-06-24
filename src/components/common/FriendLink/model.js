export default {
  name: 'FriendLink',
  data () {
    return {
      hyperlink: []
    }
  },
  async created () {
    const { data: hyperlink } = await http.post('/public/hyperlink')
    this.hyperlink = hyperlink
  }
}
