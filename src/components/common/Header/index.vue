<style scoped>
  @import './scoped.less';
</style>
<style>
  @import './override.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="root">
    <div class="quick">
      <div class="q-main">
        <a class="left" href="">[大牛应聘申请]</a>
        <ul class="right">
          <li>
            <a href="">
              <img
                class="img"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            </a>
          </li>
          <li class="msg"><a href="">消息</a></li>
          <li>
            <el-dropdown>
              <span class="el-dropdown-link user">
                橙子<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <div class="n-main">
        <a class="logo" href="">
          <img
          src="../../../../static/imgs/logo.png"/>
        </a>
        <el-menu :default-active="activeIndex" class="menu el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">全部视频</el-menu-item>
          <el-menu-item index="3">找大牛</el-menu-item>
          <el-menu-item index="4">文章</el-menu-item>
          <el-menu-item index="5">招聘</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
