export default {
  name: 'PayPage',
  data () {
    return {
      payAmount: 50
    }
  },
  methods: {
    chooseAmount: function (amount) {
      this.payAmount = amount
    }
  }
}
