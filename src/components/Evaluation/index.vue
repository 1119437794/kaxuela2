<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="container">
    <Header />
    <div class="content">
      <div class="header">
        <div class="left">
          <img src="../../../static/imgs/classLogo.png" alt="">
        </div>
        <div class="right">
          <h5>JAVA写代码附近饿哦无分红</h5>
          <p>小橙子</p>
        </div>
      </div>
      <div class="start">
        <label for="start">评价等级</label>
        <el-rate
          id="start"
          v-model="start"
          :texts="startTexts"
          change="changeStart"
          show-text>
        </el-rate>
      </div>
      <div class="detailText">
        <label for="start">填写评论</label>
        <div class="textarea">
          <el-input
            type="textarea"
            :rows="12"
            placeholder="请输入内容"
            v-model="textarea">
          </el-input>
          <div class="btn btn_green">发布评论</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
