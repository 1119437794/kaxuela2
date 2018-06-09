<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
<div class="video">
  <Header />
  <Search />
  <div class="one">
    <div class="oneleft">
      <img class="banner" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
      <img class="play" src="./imgs/play.png" alt="">
    </div>
    <div class="oneright">
      <h3>JAVA写代码。。。</h3>
      <ul class="count">
        <li class="item">22人购买</li>
        <li class="item">好评度100%</li>
        <li class="item">
          <img src="./imgs/collect.png" alt="">
          收藏
        </li>
      </ul>
      <div class="price">
        <span class="num">
          ¥288.00
        </span>
        <span class="unit">学币</span>
      </div>
      <button class="buy">立即购买</button>
    </div>
  </div>
  <div class="wrap">
    <div class="two">
      <div class="left-2">
        <el-tabs v-model="activeTab" @tab-click="handleClick">
          <el-tab-pane label="课程概述" name="课程概述">
            <CourseDesc />
          </el-tab-pane>
          <el-tab-pane label="课程目录" name="课程目录">
            <CourseDir />
          </el-tab-pane>
          <el-tab-pane label="评论" name="评论">
            <Comment />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="right-2">
        <div class="info">
          <img class="head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
          <div class="user">
            <span class="username">小小</span>
            <img class="care" src="./imgs/care.png" alt="">
          </div>
        </div>
        <ul class="count-2">
            <li class="item-2">
              <span class="label">好评度</span>
              <span>100%</span>
            </li>
            <li class="item-2">
              <span class="label">好评度</span>
              <span>100%</span>
            </li>
            <li class="item-2">
              <span class="label">好评度</span>
              <span>100%</span>
            </li>
          </ul>
          <p class="tag">课程数你奶奶家你奶奶家你奶奶家你几年级呢年你几年级你几年级呢</p>
      </div>
    </div>
  </div>
  <Footer />
</div>

</template>
