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
        <h3 class="username">{{username}}</h3>
      </div>
      <el-tabs value="我的关注" >
        <el-tab-pane label="我的关注" name="我的关注"></el-tab-pane>
      </el-tabs>
      <div
        class="item"
        v-for="(item, index) of cared"
        :key="index"
      >
        <img class="item-img" :src="item.puser.headimg" alt="">
        <div class="item-main">
          <div class="item-info">
            {{item.puser.name}}
          </div>
          <ul class="item-desc">
            <li>视频&nbsp;{{item.puser.video_count}}&emsp;|</li>
            <li>&emsp;文章&nbsp;{{item.puser.article_count}}&emsp;|</li>
            <li>&emsp;粉丝&nbsp;{{item.puser.user_attention}}</li>
          </ul>
        </div>
        <el-button class="care" type="primary" round @click="() => attention(item.puser)">
          {{item.puser.is_attention ? '取消关注' : '+关注'}}
        </el-button>
      </div>
    </div>
    <Footer />
  </div>
</template>
