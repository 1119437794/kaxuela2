export default {
  name: '视频简介项',
  components: {
  },
  data () {
    return {
      fold: false
    }
  },
  methods: {
    onFoldChange () {
      this.fold = !this.fold
    }
  }
}
