<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="comment">
    <div class="one">
      <div class="one-1">
        <span class="ratio">100%</span>
        <span class="label">好评度</span>
      </div>
      <div class="one-2">
        <el-radio v-model="radio"></el-radio>
      </div>
      <div class="one-3">
        <el-radio v-model="radio" label="1">好评（2）</el-radio>
        <el-radio v-model="radio" label="2">中评（2）</el-radio>
        <el-radio v-model="radio" label="3">差评（2）</el-radio>
      </div>
    </div>
    <div class="two">
      <div class="item">
        <div class="i-left">
          <img class="head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
          <span class="nick">水泥厂生产</span>
        </div>
        <div class="i-right">
          <el-rate v-model="value1"></el-rate>
          <span class="text">是 v 是 v 是 v 是 v 是 v 是 v</span>
          <span class="date">评价时间：2018/09/09</span>
        </div>
      </div>
      <div class="item">
        <div class="i-left">
          <img class="head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
          <span class="nick">水泥厂生产</span>
        </div>
        <div class="i-right">
          <el-rate v-model="value1"></el-rate>
          <span class="text">是 v 是 v 是 v 是 v 是 v 是 v</span>
          <span class="date">评价时间：2018/09/09</span>
        </div>
      </div>
      <div class="item">
        <div class="i-left">
          <img class="head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
          <span class="nick">水泥厂生产</span>
        </div>
        <div class="i-right">
          <el-rate v-model="value1"></el-rate>
          <span class="text">是 v 是 v 是 v 是 v 是 v 是 v</span>
          <span class="date">评价时间：2018/09/09</span>
        </div>
      </div>
    </div>
  </div>
</template>
