<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div>
    <Header />
    <div class="main">
      <div class="head">
        <img class="img" :src="userinfo.head_img" alt="">
        &emsp;
        <div class="info">
          <h3>我的余额：{{userinfo.money}}学币</h3>
          <span>(注：1学币=1元人民币)</span>
          <br />
          <br />
          <router-link class="pay" to="/pay/topUp">去充值></router-link>
        </div>
      </div>
      <div class="body">
        <el-input class="name" v-model="userinfo.username" placeholder="请输入内容"></el-input>
        <div class="sex">
          <el-radio v-model="userinfo.sex" label="男">男</el-radio>
          <el-radio v-model="userinfo.sex" label="女">女</el-radio>
        </div>
        <el-button class="save" round @click="save">保存</el-button>
      </div>
    </div>
    <Footer />
  </div>
</template>
