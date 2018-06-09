<style scoped>
  @import './scoped.less';
</style>
<style>
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="root">
    <Header />
    <div class="main">
      <div class="one">
        <div class="one-left">
          <img class="head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
          <div class="info">
            <span class="name">xiaochengzi</span>
            <ul class="count">
              <li class="item">
                <span >55</span>
                <span class="label">视频&nbsp;></span>
              </li>
              <li class="item">
                <span >55</span>
                <span class="label">文章&nbsp;></span>
              </li>
              <li class="item">
                <span >55</span>
                <span class="label">粉丝&nbsp;></span>
              </li>
              <li class="item">
                <span >55</span>
                <span class="label">字数</span>
              </li>
              <li class="item">
                <span >55</span>
                <span class="label">收获喜欢</span>
              </li>
            </ul>
          </div>
          <el-button class="care" type="primary" round>+关注</el-button>
        </div>
        <div class="one-right">
          <div class="intro">个人介绍</div><br />
          <div class="tag">90后 无所自在</div>
        </div>
      </div>
      <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="视频" name="1">
            <Video />
          </el-tab-pane>
          <el-tab-pane label="辅导课程" name="2">
            <Course />
          </el-tab-pane>
          <el-tab-pane label="文章" name="3">
            <ArticleItem />
          </el-tab-pane>
        </el-tabs>
    </div>
    <Footer />
  </div>
</template>
