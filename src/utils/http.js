import Vue from 'vue'

// 得到vue实例 调用相应弹框
const vue = new Vue({})

const methods = ['get', 'post', 'put', 'delete']

const http = function ({ method = 'get', url, data }) {
  const token = localStorage.token
  return axios({
    method,
    url,
    data: Object.assign(data, token && { token }),
    baseURL: 'http://118.24.77.192/'
  })
    .then(function ({ data }) {
      return data
    })
    .then(function (res) {
      const { code, msg } = res
      if (code === '100002' || code === '1002') {
        vue.$router.push('/login')
        throw new Error('授权过期')
      } else if ((code === '100001' || code === '1001')) {
        vue.$alert(msg, '提示', {
          confirmButtonText: '确定'
          // callback: action => {
          //   this.$message({
          //     type: 'info',
          //     message: `action: ${ action }`
          //   })
          // }
        })
        throw new Error('错误提示')
      }
      return res
    })
}

methods.forEach(method => {
  http[method] = function (url, data) {
    return http({ method, url, data })
  }
})

window.http = http
