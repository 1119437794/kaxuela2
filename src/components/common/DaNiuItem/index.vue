<style scoped>
@import './scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="daniu">
    <div class="one">
      <img class="img" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
      <div class="user">
        <span class="name">{{dataSource.name}}</span>
        <span class="job">平面设计</span>
      </div>
    </div>
    <p class="tag">wo wowo woow </p>
      <ul class="count">
        <li class="item">
          <span class="num">50</span>
          <span class="label">视频数量</span>
        </li>
        <li class="item">
          <span class="num">50</span>
          <span class="label">文章数量</span>
        </li>
        <li class="item">
          <span class="num">50</span>
          <span class="label">好评率</span>
        </li>
      </ul>
  </div>
</template>
