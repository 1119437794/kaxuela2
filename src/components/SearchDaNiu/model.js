
export default {
  name: 'SearchDaNiu',
  components: {
    ...require('../common')
  },
  data () {
    return {
      teachers: [],
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
  },
  computed: {
    superTeachers () {
      return this.teachers.slice(0, 6)
    }
  },
  async created () {
    // 大牛列表
    const teacherRes = await http.post('/index/teacher')
    this.teachers = teacherRes.data.data
  }
}
