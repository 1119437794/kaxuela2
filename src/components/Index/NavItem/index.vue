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
      <h3 class="title">{{dataSource.name}}</h3>
      <ul class="navs">
        <li
          class="nav"
          v-for="(item, index) of dataSource.children"
          :key="index"
        >
          <router-link :to="`/allVideo?keyword=${item.name}`">{{item.name}}</router-link>
        </li>
      </ul>
      <i class="el-icon-arrow-right fold-icon"></i>
    </div>
    <div
      :class="{ fold: true, show: fold}"
      v-if="fold"
    >
      <div
        class="type"
        v-for="(item0, index0) of secondOrder"
        :key="index0"
      >
        <h3 class="subtitle">{{item0.name}}</h3>
        <!-- <ul class="navs">
          <li
            class="nav"
            v-for="(item1, index1) of item0"
            :key="index1"
          >
            <router-link :to="`/video?id=${item1.id}`">{{item1.name}}</router-link>
          </li>
        </ul> -->
      </div>
    </div>
  </div>
</template>
