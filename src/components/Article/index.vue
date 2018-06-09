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
        <ArticleItem />
      </div>
      <div class="right">
        <div class="right-header">
          <span>推荐作者</span>
          <span><Icon type="refresh" />换一批</span>
        </div>
        <div class="authors">
          <div class="author">
            <img class="author-head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <div class="author-info">
              <span>xiaochengu</span>
              <span>写了33K字-8k喜欢</span>
            </div>
            <div class="author-care">+关注</div>
          </div>
           <div class="author">
            <img class="author-head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <div class="author-info">
              <span>xiaochengu</span>
              <span>写了33K字-8k喜欢</span>
            </div>
            <div class="author-care">+关注</div>
          </div>
           <div class="author">
            <img class="author-head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <div class="author-info">
              <span>xiaochengu</span>
              <span>写了33K字-8k喜欢</span>
            </div>
            <div class="author-care">+关注</div>
          </div>
           <div class="author">
            <img class="author-head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <div class="author-info">
              <span>xiaochengu</span>
              <span>写了33K字-8k喜欢</span>
            </div>
            <div class="author-care">+关注</div>
          </div>
          <div class="btn">
            <a href="">
              <img src="./imgs/btn.png" alt="">
            </a>
          </div>
        </div>
      </div>
    </div>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <Footer />
  </div>
</template>
