import {
  Footer
} from '../common'
import { BASE_URL } from '../../constants'

export default {
  name: 'Register',
  data () {
    return {
      registerType: 2,
      codeRendomData: 1243,
      codeBtnText: '获取验证码',
      registerForm: {
        imageUrl: '',
        nickname: '',
        name: '',
        password: '',
        confirmPassword: '',
        goodAt: ''
      },
      registerPhoneForm: {
        phone: '',
        vCode: '',
        verificateCode: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入名称', trigger: 'blur' },
          { min: 6, message: '长度不小于6位', trigger: 'blur' }
        ],
        nickname: [
          { required: true, message: '请输入昵称', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '长度不小于6位', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请输入确认密码', trigger: 'blur' },
          { min: 6, message: '长度不小于6位', trigger: 'blur' }
        ],
        goodAt: [
          { required: true, message: '请输入擅长', trigger: 'blur' }
        ]
      },
      phoneRules: {}
    }
  },
  computed: {
    isDaNiuRegister () {
      return +this.$route.query.type === 2
    },
    imgCode () {
      return `${BASE_URL}/public/code?codetoken=${this.codeRendomData}&token=${window.localStorage.token}`
    }
  },
  methods: {
    uploadOk (res, file) {
      this.registerForm.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.registerType = 2
        } else {
          return false
        }
      })
    },
    submit (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.created()
        } else {
          return false
        }
      })
    },
    getImageSuccess (res, file) {
      this.registerForm.imageUrl = URL.createObjectURL(file.raw)
    },
    async sendCodeToPhone () {
      try {
        const res = await http.post('/auth/sendcode', {
          phone: this.registerPhoneForm.phone,
          piccode: this.registerPhoneForm.vCode,
          codetoken: this.codeRendomData
        })
        if (res.status !== 1) {
          this.codeRendomData = this.getRandomData()
          this.$message.error(res.msg)
        } else {
          // 显示倒计时
          let i = 60
          this.timer = setInterval(() => {
            i--
            if (i < 0) {
              clearInterval(this.timer)
              this.codeBtnText = '获取验证码'
              return
            }
            this.codeBtnText = `${i}s`
          }, 1000)
        }
      } catch (error) {
        this.reloadImgCode()
      }
    },
    async created () {
      const res = await http.post('/auth/register', {
        phone: this.registerPhoneForm.phone,
        code: this.registerPhoneForm.verificateCode,
        username: this.registerForm.name,
        password: this.registerForm.password,
        nickname: this.registerForm.nickname,
        good: this.registerForm.goodAt,
        headimg: this.registerForm.imageUrl,
        type: 1
      })
      if (res.status === 1) {
        this.$message.success(res.msg)
        this.$router.push({
          path: '/login'
        })
      }
    },
    getRandomData () {
      return Math.floor(Math.random() * 10000)
    },
    reloadImgCode () {
      this.codeRendomData = Math.floor(Math.random() * 1000)
    }
  },
  destroyed () {
    this.timer && clearInterval(this.timer)
  },
  components: {
    Footer
  }
}
