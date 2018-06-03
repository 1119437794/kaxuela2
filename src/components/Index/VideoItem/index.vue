<style scoped>
@import './scoped.less';
</style>
<style>
@import './override.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="root videoItem">
    <div class="a">
      <img src="./imgs/video.png" alt="">
      <h3>Java从入门到放弃</h3>
    </div>
    <p class="b">叫你如何从新手编程程序大拿</p>
    <div class="tags">
      <el-tag type="info">标签三</el-tag>
      <el-tag type="info">标签三</el-tag>
    </div>
    <p class="d">[发布时间：20180808]</p>
    <div class="e">
      <img class="c" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
      <div>
        <h3 class="f">程序小王</h3>
        <p class="g">做最牛逼的程序员</p>
      </div>
    </div>
  </div>
</template>
