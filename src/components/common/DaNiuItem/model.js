export default {
  name: 'DaNiuItem',
  props: ['dataSource'],
  data () {
    return {
      fold: false
    }
  },
  methods: {
    gotoDetail () {
      this.$router.push({ path: `/partner?id=${this.dataSource.id}` })
    }
  }
}
