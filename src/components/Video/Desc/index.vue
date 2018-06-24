<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="desc">
    <div class="tech">老师介绍</div>
    <div class="info">
      <img class="head" :src="dataSource.headimg" alt="">&emsp;
      <div class="user">
        <span class="name">{{dataSource.name}}</span>
        <span class="tag">
          {{dataSource.remark}}
        </span>
      </div>
    </div>
    <div class="intro">
      <div class="intro-label">简介</div>
      <div class="intro-text">
        {{dataSource.intro}}
      </div>
    </div>
    <div class="banner">
      <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
    </div>
  </div>

</template>
