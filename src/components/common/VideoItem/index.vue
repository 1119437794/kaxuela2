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
      <h3 @click="gotoDetail">
        {{dataSource.title}}
        <!-- <router-link :to="'video?id='+dataSource.id">{{dataSource.title}}</router-link> -->
      </h3>
    </div>
    <p class="b">{{dataSource.alias}}</p>
    <div class="tags">
      <el-tag
        type="info"
        v-for="(item, index) of dataSource.tag.split(/[,，]/)"
        :key="index"
      >{{item}}</el-tag>
    </div>
    <p class="d">[发布时间：{{dataSource.created_at}}]</p>
    <div class="e">
      <img class="c" :src="dataSource.user.headimg" alt="">
      <div>
        <h3 class="f">{{dataSource.user.name}}</h3>
        <p class="g">{{dataSource.user.remark}}</p>
      </div>
    </div>
  </div>
</template>
