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
    <div
      class="item"
      v-for="(item, index) of dataSource"
      :key="index"
    >
      <div class="left">
        <div class="one">
          <img class="one-icon" src="../imgs/video.png" alt="">
          <div class="title">{{item.title}}</div>
        </div>
        <div class="two">
          <el-tag class="tag" size="small"
            v-for="(tag, tIndex) of item.tag.split(/[,，]/)"
            :key="tIndex"
          >{{tag}}</el-tag>
          <span class="datetime">{{item.updated_at}}</span>
        </div>
        <ul class="count">
          <li>
            <Icon type="eye"></Icon>&nbsp;199
          </li>
          <li>
            <Icon type="chatbox"></Icon>&nbsp;{{item.comment_count}}
          </li>
          <li>
            <Icon type="heart"></Icon>&nbsp;199
          </li>
        </ul>
      </div>
      <div class="right">
        <img class="thumb" :src="item.img" alt="">
      </div>
    </div>
  </div>
</template>
