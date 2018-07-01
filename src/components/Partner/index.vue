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
          <img class="head" :src="details.headimg" alt="">
          &emsp;
          <div class="info">
            <span class="name">{{details.name}}</span>
            <ul class="count">
              <li class="item">
                <span >{{details.video_count}}</span>
                <span class="label">视频&nbsp;></span>
              </li>
              <li class="item">
                <span >{{details.article_count}}</span>
                <span class="label">文章&nbsp;></span>
              </li>
              <li class="item">
                <span >{{details.user_attention}}</span>
                <span class="label">粉丝&nbsp;></span>
              </li>
              <li class="item">
                <span >{{details.word_count}}</span>
                <span class="label">字数</span>
              </li>
              <!-- <li class="item">
                <span >55</span>
                <span class="label">收获喜欢</span>
              </li> -->
            </ul>
          </div>
          <el-button class="care" type="primary" round @click="care">
            {{details.is_attention ? '取消关注' : '+关注'}}
          </el-button>
        </div>
        <div class="one-right">
          <div class="intro">个人介绍</div><br />
          <div class="tag">{{details.remark}}</div>
        </div>
      </div>
      <el-tabs v-model="activeTab">
          <el-tab-pane label="视频" name="视频">
            <Video :dataSource="details.course" />
          </el-tab-pane>
          <!-- <el-tab-pane label="辅导课程" name="辅导课程">
            <Course />
          </el-tab-pane> -->
          <el-tab-pane label="文章" name="文章">
            <ArticleItem
              v-for="(item, index) of details.news"
              :key="index"
              :dataSource="item"
            />
          </el-tab-pane>
        </el-tabs>
    </div>
    <Footer />
  </div>
</template>
