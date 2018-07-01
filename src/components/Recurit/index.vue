<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div>
    <Header />
    <div class="main">
      <div
        class="item"
        v-for="(item, index) of recruitment"
        :key="index"
      >
        <h3 class="title">{{item.title}}</h3>
        <br />
        <p class="content" v-html="item.content"></p>
      </div>
    </div>
    <Footer />
  </div>
</template>
