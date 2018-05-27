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
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
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
  }
}
