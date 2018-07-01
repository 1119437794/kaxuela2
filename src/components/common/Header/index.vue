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
  <div class="root">
    <div class="quick">
      <div class="q-main">
        <router-link class="left" to="register?type=2">[大牛应聘申请]</router-link>
        <ul class="right">
          <li>
            <a href="/order">
              <img
                class="img"
                :src="userinfo.head_img" alt="">
            </a>
          </li>
          <!-- <li class="msg"><a href="">消息</a></li> -->
          <li v-if="username">
            <el-dropdown
              size="small"
              placement="bottom-start"
              @command="goto"
            >
              <span class="el-dropdown-link user">
                {{username}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" >
                <!-- <el-dropdown-item>基础信息</el-dropdown-item> -->
                <el-dropdown-item command="order">全部订单</el-dropdown-item>
                <el-dropdown-item command="myCare">我的关注</el-dropdown-item>
                <el-dropdown-item command="myCollect">我的收藏</el-dropdown-item>
                <el-dropdown-item command="exit">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
    <div class="nav">
      <div class="n-main">
        <a class="logo" href="/">
          <img src="../../../../static/imgs/logo.png"/>
        </a>
        <el-menu
          :default-active="activeNav"
          class="menu el-menu-demo"
          mode="horizontal"
          @select="onNavChange"
        >
          <el-menu-item
            v-for="({name, path}, index) in navs"
            :key="index"
            :index="path"
          >{{name}}</el-menu-item>
        </el-menu>
      </div>
    </div>
  </div>
</template>
