export default {
  name: 'NavItem',
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
