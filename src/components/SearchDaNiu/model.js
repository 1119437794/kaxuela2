
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
        // 'button-prev': {
        //   el: '.swiper-button-prev'
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          click: (e) => {
            const id = e.target.getAttribute('data-id')
            if (id === undefined || id === null) return
            this.$router.push({path: `/partner?id=${id}`})
          }
        }
      }
    }
  },
  computed: {
    superTeachers () {
      return this.teachers.slice(0, 6)
      // return new Array(10).fill({ id: 10 })
    }
  },
  async created () {
    // 大牛列表
    const teacherRes = await http.post('/index/teacher')
    this.teachers = teacherRes.data.data
  }
}
