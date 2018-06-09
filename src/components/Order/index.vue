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
        default-active="2"
        class="el-menu-vertical-demo left"
        @open="handleOpen"
        @close="handleClose">
        <el-menu-item index="1">
          <i class="el-icon-location"></i>
          <span slot="title">全部订单</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">辅导课程</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">视频课程</span>
        </el-menu-item>
          </el-menu>
      <div class="right">
        <div class="header">
          <span class="info">订单信息</span>
          <span class="status">状态</span>
          <span class="oprator">操作</span>
        </div>
        <div class="item">
          <div class="item-info">
            <div class="creat-time">创建时间：20180808</div>
            <div class="item-desc">
              <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
              <div>
                <div class="item-title">JAVA花式学法</div>
                <div class="item-name">小橙子</div>
                <div class="item-price">¥1.00学币</div>
              </div>
            </div>
          </div>
          <div class="item-status">代付款</div>
          <div class="item-oprator">去付款</div>
        </div>
        <div class="item">
          <div class="item-info">
            <div class="creat-time">创建时间：20180808</div>
            <div class="item-desc">
              <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
              <div>
                <div class="item-title">JAVA花式学法</div>
                <div class="item-name">小橙子</div>
                <div class="item-price">¥1.00学币</div>
              </div>
            </div>
          </div>
          <div class="item-status">代付款</div>
          <div class="item-oprator">去付款</div>
        </div>
        <div class="item">
          <div class="item-info">
            <div class="creat-time">创建时间：20180808</div>
            <div class="item-desc">
              <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
              <div>
                <div class="item-title">JAVA花式学法</div>
                <div class="item-name">小橙子</div>
                <div class="item-price">¥1.00学币</div>
              </div>
            </div>
          </div>
          <div class="item-status">代付款</div>
          <div class="item-oprator">去付款</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
