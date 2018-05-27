import {
  Footer
} from '../common'

export default {
  name: 'TopUp',
  data () {
    return {
      topUpAmount: 50
    }
  },
  methods: {
    chooseAmount: function (amount) {
      this.topUpAmount = amount
    }
  },
  components: {
    Footer
  }
}
