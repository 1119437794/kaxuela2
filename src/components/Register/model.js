import {
  Footer
} from '../common'
export default {
  name: 'Register',
  data () {
    return {
      registerType: 1,
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
          console.log('error submit!!')
          return false
        }
      })
    }
  },
  components: {
    Footer
  },
  async created () {
    const res = await http.post('/auth/register', {
      phone: '18482127629',
      code: '1314',
      username: '前端🦅',
      password: '123456',
      nickname: '小白'
    })
    console.log(res, '此处只管处理正确的时候的逻辑，其他逻辑都被拦截处理了')
  }
}
