<style scoped>
@import './scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="daniu">
    <div class="one">
      <img class="img" :src="dataSource.headimg" alt="">
      <div class="user">
        <span class="name">{{dataSource.name}}</span>
        <span class="job">{{dataSource.good}}</span>
      </div>
    </div>
    <p class="tag">{{dataSource.remark}}</p>
      <ul class="count">
        <li class="item">
          <span class="num">{{dataSource.video_count}}</span>
          <span class="label">视频数量</span>
        </li>
        <li class="item">
          <span class="num">{{dataSource.video_count}}</span>
          <span class="label">文章数量</span>
        </li>
        <li class="item">
          <span class="num">{{dataSource.comment_good_per}}</span>
          <span class="label">好评率</span>
        </li>
      </ul>
  </div>
</template>
