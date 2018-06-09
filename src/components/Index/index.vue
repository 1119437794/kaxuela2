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
        <el-tabs v-model="activeVideoType" @tab-click="handleClick">
          <el-tab-pane label="热门视频" name="热门视频"></el-tab-pane>
          <el-tab-pane label="最新视频" name="最新视频"></el-tab-pane>
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
      <div class="four">
        <el-tabs value="热门大牛" @tab-click="handleClick">
          <el-tab-pane label="热门大牛" name="热门大牛"></el-tab-pane>
        </el-tabs>
        <div class="fourMain">
          <DaNiuItem />
          <DaNiuItem />
          <DaNiuItem />
          <DaNiuItem />
          <DaNiuItem />
          <DaNiuItem />
          <DaNiuItem />
          <DaNiuItem />
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
