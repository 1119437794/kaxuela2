
export default {
  name: 'MyCare',
  components: {
    ...require('../common')
  },
  data () {
    return {
      username: '',
      cared: [],
      userinfo: {}
    }
  },
  methods: {
    // 我的关注详情
    async getDetails () {
      const cared = await http.post('/user/attention')
      this.cared = cared.data.data
    },
    // 关注老师
    async attention ({ is_attention: isAttention, id }) {
      await http.post('/public/attention', {
        p_user_id: id,
        type: isAttention ? 2 : 1
      })
      this.getDetails()
    }
  },
  async created () {
    this.username = localStorage.username
    this.getDetails()

    const { data: userinfo } = await http.post('/public/userinfo')
    this.userinfo = userinfo
  }
}
