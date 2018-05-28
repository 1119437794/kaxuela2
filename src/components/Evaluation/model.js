import {
  Footer,
  Header
} from '../common'
export default {
  name: 'Evaluation',
  data () {
    return {
      start: 3,
      startTexts: [
        '差评：课程太差了，我要吐槽',
        '勉强中评！课程不满意',
        '中评！课程一般',
        '好评！课程还不错，继续保持',
        '五星好评！课程非常棒，点赞'
      ]
    }
  },
  methods: {
    changeStart: function (newStart) {
      this.start = newStart
    }
  },
  components: {
    Footer,
    Header
  }
}
