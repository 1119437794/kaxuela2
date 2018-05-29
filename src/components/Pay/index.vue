<style scoped lang="less">
  @import 'scoped.less';
</style>

<script>
export { default } from './model'
</script>
<template>
  <div>
    <div class="header">
      <a href="#" class="logo">
        <img src="" alt="">
      </a>
      <span class="title">账户充值</span>
      <div class="rigth-p">
        账号：几句
      </div>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>
