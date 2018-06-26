<style scoped>
  @import './scoped.less';
</style>
<style>
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="video">
    <div class="item">
      <div class="left">
        <div class="one">
          <img class="head" :src="dataSource.puser.headimg" alt="">
          <div class="name">{{dataSource.puser.name}}</div>
          <div class="datetime">{{dataSource.updated_at}}</div>
        </div>
        <div class="title">
          {{dataSource.news && dataSource.news.title}}
        </div>
        <div class="content">
          {{dataSource.news && dataSource.news.content}}
        </div>
        <ul class="count">
          <li class="num">
            <Icon type="eye" size="18"/>&nbsp;{{dataSource.puser.video_count}}
          </li>
          <li class="num">
            <Icon type="chatbox" size="18"></Icon>&nbsp;{{dataSource.puser.comment_count}}
          </li>
          <li class="num">
            <Icon type="heart" size="18"></Icon>&nbsp;{{dataSource.puser.user_attention}}
          </li>
        </ul>
      </div>
      <div class="right">
        <img class="thumb" :src="dataSource.img" alt="">
      </div>
    </div>
  </div>
</template>
