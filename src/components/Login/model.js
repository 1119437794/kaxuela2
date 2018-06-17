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
          { required: true, message: '请输入已验证手机/邮箱', trigger: 'blur' }
        ],
        passWord: [
          { required: true, message: '请输入已验证手机/邮箱', trigger: 'blur' }
        ]
      },
      codeRules: {
        phoneNumber: [
          { required: true, message: '请输入已验证手机/邮箱', trigger: 'blur' }
        ],
        vCode: [
          { required: true, message: '请输入已验证手机/邮箱', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入已验证手机/邮箱', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    switchTab: function (tabName) {
      this.tabPanel = tabName
    },
    submitForm: function (formName) {
      console.log(formName)
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
        phone: this.formData.phoneNumber,
        code: this.formData.vCode
      })
      console.log(res)
    },

    async formSubmit () {
      const res = await http.post('/auth/passlogin', {
        username: this.formData.user,
        password: this.formData.passWord
      })
      localStorage.setItem('token', res.data.token)
      this.$router.push({
        path: '/'
      })
    }
  }
}
