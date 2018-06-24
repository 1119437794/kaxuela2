export default {
  name: 'NavItem',
  props: ['dataSource'],
  data () {
    return {
      fold: false
    }
  },
  computed: {
    // 第二级分类
    secondOrder () {
      const { children: firstOrder } = this.dataSource
      return firstOrder.reduce((last, { name, children }) => {
        return [
          ...last,
          {
            name,
            children
          }
        ]
      }, [])
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
