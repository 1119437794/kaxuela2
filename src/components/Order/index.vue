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
      <el-menu
        :default-active="activeNav"
        class="el-menu-vertical-demo left"
        @select="onNavChange"
      >
        <el-menu-item index="基础信息">
          <i class="el-icon-tickets"></i>
          <span slot="title">基础信息</span>
        </el-menu-item>
        <el-menu-item index="我的收藏">
          <i class="el-icon-star-off"></i>
          <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-menu-item index="我的关注">
          <i class="el-icon-star-on"></i>
          <span slot="title">我的关注</span>
        </el-menu-item>
        <el-menu-item index="全部订单">
          <i class="el-icon-menu"></i>
          <span slot="title">全部订单</span>
        </el-menu-item>
        <!-- <el-menu-item index="辅导课程">
          <i class="el-icon-menu"></i>
          <span slot="title">辅导课程</span>
        </el-menu-item>
        <el-menu-item index="视频课程">
          <i class="el-icon-document"></i>
          <span slot="title">视频课程</span>
        </el-menu-item> -->
          </el-menu>
      <div class="right">
        <div class="header">
          <span class="info">订单信息</span>
          <span class="status">状态</span>
          <span class="oprator">操作</span>
        </div>
        <List />
      </div>
    </div>
    <Footer />
  </div>
</template>
