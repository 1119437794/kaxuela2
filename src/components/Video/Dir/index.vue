<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="dir">
    <div
      class="item"
      v-for="(item, index) of dataSource"
      :key="index"
      @click="() => gotoPaly(item)"
    >
      <img class="icon" src="./imgs/video.png" alt="">
      <div>
        <span>【录播】</span>
        <span>{{item.title}}</span>
        <span>（{{item.created_at}}）</span>
      </div>
    </div>
  </div>
</template>
