export default {
  name: 'daniu',
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
