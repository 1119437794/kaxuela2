export default {
  name: 'Login',
  data () {
    return {
      tabPanel: 'passwordLogin',
      formData: {
        user: '',
        passWord: ''
      },
      formCode: {
        phoneNumber: '',
        vCode: '',
        verificationCode: ''
      },
      dataRules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      codeRules: {
        phoneNumber: [
          { required: true, message: '请输入已验证手机/邮箱', trigger: 'blur' }
        ],
        vCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入手机验证码', trigger: 'blur' }
        ]
      },
      codeRendomData: 1243
    }
  },
  computed: {
    imgCode () {
      const baseUrl = process.env.NODE_ENV === 'development' ? 'http://118.24.77.192' : ''
      return `${baseUrl}/public/code?codetoken=${this.codeRendomData}&token=${window.localStorage.token}`
    }
  },
  methods: {
    switchMyTab: function (tabName) {
      this.tabPanel = tabName
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.formSubmit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitCodeForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.codeSubmit()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async codeSubmit () {
      const res = await http.post('/auth/codelogin', {
        phone: this.formCode.phoneNumber,
        code: this.formCode.verificationCode
      })
      if (res.status === 1) {
        localStorage.setItem('token', res.data.token)
        this.$router.push({
          path: '/'
        })
      } else {
        this.$message.error(res.msg)
      }
    },

    async formSubmit () {
      const res = await http.post('/auth/passlogin', {
        username: this.formData.user,
        password: this.formData.passWord
      })
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('username', this.formData.user)
      this.$router.push({
        path: '/'
      })
    },

    async sendCodeToPhone () {
      const res = await http.post('/auth/sendcode', {
        phone: this.formCode.phoneNumber,
        piccode: this.formCode.vCode,
        codetoken: this.codeRendomData
      })
      if (res.status !== 1) {
        this.codeRendomData = this.getRandomData()
        this.$message.error(res.msg)
      }
    },

    getRandomData () {
      return Math.floor(Math.random() * 10000)
    }

  }
}
