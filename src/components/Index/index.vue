<style scoped>
@import './scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="root">
    <Header />
    <Search />
    <div class="main">
      <div class="two">
        <div class="navs">
          <NavItem
            v-for="(item, i) in navs"
            :key="i"
          />
        </div>
        <div class="banner">
          <img src="./imgs/banner.jpg" alt="">
        </div>
      </div>
      <div class="three">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
          <el-tab-pane label="配置管理" name="second"></el-tab-pane>
        </el-tabs>
        <div class="videos">
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
          <VideoItem />
        </div>
        <div class="btn">
          <a href="">
            <img src="./imgs/btn.png" alt="">
          </a>
        </div>
      </div>
    </div>
    <FriendLink />
    <Footer />
  </div>
</template>
