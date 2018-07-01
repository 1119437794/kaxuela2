<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div>
    <Header />
    <Search />
    <div class="main">
      <div class="left">
        <ArticleItem
          v-for="(item, index) of article"
          :key="index"
          :dataSource="item"
        />
      </div>
      <div class="right">
        <div class="right-header">
          <span>推荐作者</span>
          <span class="refresh" @click="recommend"><Icon type="refresh" />换一批</span>
        </div>
        <div class="authors">
          <div class="author" v-for="(item, index) of authors" :key="index">
            <img class="author-head" :src="item.headimg" alt="" @click="() => gotoPartner(item.id)">
            <div class="author-info">
              <span>{{item.name}}</span>
              <span>{{item.word_count}}</span>
            </div>
            <div class="author-care" @click="() => care(item)">
              {{item.is_attention ? '取消关注' : '+关注'}}
            </div>
          </div>
          <div class="btn">
            <router-link to="/searchDaNiu">
              <img src="./imgs/btn.png" alt="">
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination> -->
    <Footer />
  </div>
</template>
