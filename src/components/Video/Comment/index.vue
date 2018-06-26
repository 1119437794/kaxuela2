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
        <span class="ratio">{{dataSource.goodPer}}</span>
        <span class="label">好评度</span>
      </div>
      <div class="one-2">
        <el-radio v-model="radio" label="0" @change="selectComments">&nbsp;</el-radio>
      </div>
      <div class="one-3">
        <el-radio v-model="radio" label="1" @change="selectComments">好评（{{dataSource.goodCount}}）</el-radio>
        <el-radio v-model="radio" label="2" @change="selectComments">中评（{{dataSource.centerCount}}）</el-radio>
        <el-radio v-model="radio" label="3" @change="selectComments">差评（{{dataSource.diffCount}}）</el-radio>
      </div>
    </div>
    <div class="two">
      <div
        class="item"
        v-for="(item, index) of comments"
        :key="index"
      >
        <div class="i-left">
          <img class="head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
          <span class="nick">水泥厂生产</span>
        </div>
        <div class="i-right">
          <el-rate v-model="item.level" disabled></el-rate>
          <span class="text">{{item.content}}</span>
          <span class="date">评价时间：2018/09/09</span>
        </div>
      </div>
      <!-- <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination> -->
    </div>
  </div>
</template>
