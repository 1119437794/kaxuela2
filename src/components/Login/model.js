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
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      },
      codeRules: {
        phoneNumber: [
          { required: true, message: '请输入常用手机号', trigger: 'blur' }
        ],
        vCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ],
        verificationCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    switchTab: function (tabName) {
      this.tabPanel = tabName
    },
    submitForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.login()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    submitCodeForm: function (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    async login () {
      const res = await http.post('/auth/passlogin', {
        username: this.formData.user,
        password: this.formData.passWord
      })
      console.log(res)
    }
  }
}
