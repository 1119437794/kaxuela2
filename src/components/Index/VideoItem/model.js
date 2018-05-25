export default {
  name: 'VideoItem',
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
