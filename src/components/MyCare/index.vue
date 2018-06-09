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
            小侄子
          </div>
          <ul class="item-desc">
            <li>视频&nbsp;3&emsp;|</li>
            <li>&emsp;文章&nbsp;3&emsp;|</li>
            <li>&emsp;粉丝&nbsp;3</li>
          </ul>
        </div>
        <el-button class="care" type="primary" round>+关注</el-button>
      </div>
      <div class="item">
        <img class="item-img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
        <div class="item-main">
          <div class="item-info">
            小侄子
          </div>
          <ul class="item-desc">
            <li>视频&nbsp;3&emsp;|</li>
            <li>&emsp;文章&nbsp;3&emsp;|</li>
            <li>&emsp;粉丝&nbsp;3</li>
          </ul>
        </div>
        <el-button class="care" type="primary" round>+关注</el-button>
      </div>
      <div class="item">
        <img class="item-img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
        <div class="item-main">
          <div class="item-info">
            小侄子
          </div>
          <ul class="item-desc">
            <li>视频&nbsp;3&emsp;|</li>
            <li>&emsp;文章&nbsp;3&emsp;|</li>
            <li>&emsp;粉丝&nbsp;3</li>
          </ul>
        </div>
        <el-button class="care" type="primary" round>+关注</el-button>
      </div>
    </div>
    <Footer />
  </div>
</template>
