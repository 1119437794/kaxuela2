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
        <img class="head-img" :src="userinfo.head_img" alt="">
        <h3 class="username">{{username}}</h3>
      </div>
      <el-tabs value="我的收藏">
        <el-tab-pane label="我的收藏" name="我的收藏"></el-tab-pane>
      </el-tabs>
      <ArticleItem
        v-for="(item, index) of collected"
        :key="index"
        :dataSource="item"
      />
    </div>
    <Footer />
  </div>
</template>
