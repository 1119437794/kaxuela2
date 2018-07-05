
export default {
  name: 'ucenter',
  components: {
    ...require('../common')
  },
  data () {
    return {
      userinfo: {}
    }
  },
  methods: {
    async save () {
      const { username, sex } = this.userinfo
      await http.post('/user/update', {
        username,
        sex
      })
      this.$alert('保存成功', '提示', {
        confirmButtonText: '确定'
      })
    }
  },
  async created () {
    const { data: userinfo } = await http.post('/public/userinfo')
    this.userinfo = userinfo
  }
}
