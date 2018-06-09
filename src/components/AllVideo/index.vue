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
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
      <VideoItem />
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
