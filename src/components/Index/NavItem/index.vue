<style scoped lang="less">
@import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div
    class="root"
    @mouseenter="onFoldChange"
    @mouseleave="onUnFoldChange"
  >
    <div class="unfold">
      <h3 class="title">技术</h3>
      <ul class="navs">
        <li class="nav"><a href="">Java</a></li>
        <li class="nav"><a href="">Java</a></li>
        <li class="nav"><a href="">Java</a></li>
      </ul>
      <i class="el-icon-arrow-right fold-icon"></i>
    </div>
    <div
      :class="{ fold: true, show: fold}"
      v-if="fold"
    >
      <div class="type">
        <h3 class="subtitle">后端开发</h3>
        <ul class="navs">
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
        </ul>
      </div>
      <div class="type">
        <h3 class="subtitle">后端开发</h3>
        <ul class="navs">
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
          <li class="nav"><a href="">Java</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
