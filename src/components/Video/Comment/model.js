export default {
  name: 'Desc',
  components: {
    ...require('../../common')
  },
  props: ['dataSource'],
  data () {
    return {
      radio: '0',
      comments: this.dataSource.comments
    }
  },
  methods: {
    selectComments () {
      if (this.radio === '0') {
        this.comments = this.dataSource.comments
      } else if (this.radio === '1') {
        // 好评
        this.comments = this.dataSource.comments.filter(({ level }) => level > 3)
      } else if (this.radio === '2') {
        // 好评
        this.comments = this.dataSource.comments.filter(({ level }) => level === 3)
      } else if (this.radio === '3') {
        // 好评
        this.comments = this.dataSource.comments.filter(({ level }) => level < 3)
      }
    }
  }
}
