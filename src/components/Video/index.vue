<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
<div class="video">
  <Header />
  <Search />
  <div class="one">
    <div class="oneleft">
      <img class="banner" :src="details.img" alt="">
      <div class="play">
        <div class="play-border" @click="gotoPaly">
          <Icon
            type="ios-play"
            size="40"
            color="#fff"
          />
        </div>
        <br/>
        <span>试听</span>
      </div>
    </div>
    <div class="oneright">
      <h3>{{details.title}}</h3>
      <ul class="count">
        <li class="item">{{details.comment_good_per}}人购买</li>
        <li class="item">好评度&nbsp;{{details.comment_good_per}}</li>
        <li
          class="item collect"
          @click="collect"
        >
          <Icon
            type="heart"
            color="#96b4d0"
            v-if="details.course_is_collect === 1"
          ></Icon>
          <Icon
            type="heart"
            v-if="details.course_is_collect === 0"
          ></Icon>
          &nbsp;
          收藏
        </li>
      </ul>
      <div class="price">
        <span class="num">
          ¥{{details.money}}
        </span>
        <span class="unit">学币</span>
      </div>
      <button
        class="buy"
        @click="gotoPay"
      >立即购买</button>
    </div>
  </div>
  <div class="wrap">
    <div class="two">
      <div class="left-2">
        <el-tabs v-model="activeTab">
          <el-tab-pane label="课程概述" name="课程概述">
            <CourseDesc
              :dataSource="{
                name: details.user && details.user.name,
                remark: details.user && details.user.remark,
                headimg: details.user && details.user.headimg,
                intro: details.intro
              }"
            />
          </el-tab-pane>
          <el-tab-pane label="课程目录" name="课程目录">
            <CourseDir :dataSource="details.content" />
          </el-tab-pane>
          <el-tab-pane label="评论" name="评论">
            <Comment
              :dataSource="{
                comments: details.coursecomment,
                goodPer: details.comment_good_per,
                goodCount: details.good_comment_sum,
                centerCount: details.centre_comment_sum,
                diffCount: details.diff_comment_sum,
              }"
            />
          </el-tab-pane>
        </el-tabs>
      </div>
      <div class="right-2">
        <div class="info">
          <img class="head" :src="details.user && details.user.headimg" alt="">&emsp;
          <div class="user">
            <span class="username">{{details.user && details.user.name}}</span>
            <el-button
              class="care"
              type="primary"
              round
              @click="() => attention(details.user && details.user.is_attention)"
            >
              {{
                details.user && details.user.is_attention ? '取消关注' : '+关注'
              }}
            </el-button>
          </div>
        </div>
        <ul class="count-2">
            <li class="item-2">
              <span class="label">好评度</span>
              <span>{{details.user && details.user.comment_good_per}}</span>
            </li>
            <li class="item-2">
              <span class="label">课程数</span>
              <span>{{details.user && details.user.video_count}}</span>
            </li>
            <li class="item-2">
              <span class="label">学习人数</span>
              <span>{{details.user && details.user.comment_count}}</span>
            </li>
          </ul>
          <p class="tag">{{details.user && details.user.remark}}</p>
      </div>
    </div>
  </div>
  <Modal
     v-model="visible"
    title="购买课程"
    @on-ok="onModalOk"
    @on-cancel="onModalCancel">
    <div class="modal-body">
      <div class="modal-info">
        <img :src="details.img" alt="">
        <div class="modal-name">
          <h3>{{details.title}}</h3>
          <span>{{details.user.name}}</span>
        </div>
      </div>
      <div class="modal-price">课程价格&nbsp;<strong>¥{{details.money}}</strong>&nbsp;学币</div>
    </div>
  </Modal>
  <Footer />
</div>

</template>
