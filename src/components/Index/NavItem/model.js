export default {
  name: '首页里的导航',
  components: {
  },
  data () {
    return {
      fold: false
    }
  },
  methods: {
    onFoldChange () {
      this.fold = true
    },
    onUnFoldChange () {
      this.fold = false
    }
  }
}
