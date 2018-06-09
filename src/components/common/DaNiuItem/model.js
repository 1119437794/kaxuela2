export default {
  name: 'DaNiuItem',
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
