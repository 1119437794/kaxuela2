export default {
  name: 'Desc',
  components: {
    ...require('../../common')
  },
  props: ['dataSource'],
  methods: {
    gotoPaly (item) {
      this.$router.push({ path: `/play?id=${item.id}` })
    }
  }
}
