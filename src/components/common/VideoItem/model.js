export default {
  name: 'VideoItem',
  props: ['dataSource'],
  methods: {
    gotoDetail () {
      this.$router.push(`video?id=${this.dataSource.id}`)
    }
  }
}
