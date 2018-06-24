<style scoped>
  @import './scoped.less';
</style>
<style>
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="root">
    <h3 class="head">
      <span class="title">友情链接</span>
    </h3>
    <div class="body">
      <ul class="links">
        <li
          class="link"
          v-for="(item, index) of hyperlink"
          :key="index"
        ><a :href="item.link">{{item.title}}</a></li>
      </ul>
    </div>
  </div>
</template>
