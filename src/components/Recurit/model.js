
export default {
  name: 'Recurit',
  components: {
    ...require('../common')
  },
  data () {
    return {
      recruitment: {}
    }
  },
  async created () {
    const { data: recruitment } = await http.post('/public/recruitment')
    this.recruitment = recruitment
  }
}
