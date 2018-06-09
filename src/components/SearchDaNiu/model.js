
export default {
  name: '找大牛',
  components: {
    ...require('../common')
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 45,
        slidesPerGroup: 5,
        loop: true,
        loopFillGroupWithBlank: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
