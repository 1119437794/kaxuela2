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
      <div class="one">
        <img class="head-img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
        <h3 class="username">i 翱翔恒子</h3>
      </div>
      <el-tabs value="我的关注" @tab-click="handleClick">
        <el-tab-pane label="我的关注" name="我的关注"></el-tab-pane>
      </el-tabs>
      <div class="item">
        <img class="item-img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
        <div class="item-main">
          <div class="item-info">
            <a href="">小侄子</a>&emsp;
            <span>20180808</span>
          </div>
          <p class="item-desc">关注了你</p>
        </div>
      </div>
      <div class="item">
        <img class="item-img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
        <div class="item-main">
          <div class="item-info">
            <a href="">小侄子</a>&emsp;
            <span>20180808</span>
          </div>
          <p class="item-desc">关注了你</p>
        </div>
      </div>
      <div class="item">
        <img class="item-img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
        <div class="item-main">
          <div class="item-info">
            <a href="">小侄子</a>&emsp;
            <span>20180808</span>
          </div>
          <p class="item-desc">关注了你</p>
        </div>
      </div>
      <div class="item">
        <img class="item-img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
        <div class="item-main">
          <div class="item-info">
            <a href="">小侄子</a>&emsp;
            <span>20180808</span>
          </div>
          <p class="item-desc">关注了你</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
