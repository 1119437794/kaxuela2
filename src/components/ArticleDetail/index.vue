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
      <div class="left">
        <h3 class="title">{{details.title}}</h3>
        <ul class="count">
          <li class="num">
            <Icon type="eye" size="18"/>&nbsp;33
          </li>
          <li class="num">
            <Icon type="chatbox" size="18"></Icon>&nbsp;{{details.comment_count}}
          </li>
          <li class="num" @click="collectArticle" style="cursor: pointer">
            <Icon type="heart" size="18" ></Icon>&nbsp;{{details.collect_count}}
          </li>
        </ul>
        <p class="content">{{details.content}}</p>
        <div class="comment">
          <div class="input">
            <img class="head" :src="userinfo.head_img" alt="">
            &emsp;
            <div>
              <textarea v-if="isLogin" class="text" v-model="comment" placeholder="写下你的评论"></textarea>
              <div v-else class="unlogin">
                <el-button class="right-lg-btn" round>&nbsp;登录&nbsp;</el-button>
                &emsp;<span>后查看更多</span>
              </div>
              <br/>
              <el-button class="right-sl-btn submit" @click="submitComment">提交</el-button>
            </div>
          </div>
          <div class="total">{{details.newscomment.length}}条评论</div>
          <div
            class="dialog"
            v-for="(item, index) of details.newscomment"
            :key="index"
          >
            <div class="me">
              <p class="me-comment">我想你一定很忙，所以只看锤子</p>
              <div class="me-info">
                <img class="head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
                <div class="me-text">
                  <span>云水迁徙</span>
                  <span class="me-time">25楼 20180808</span>
                </div>
              </div>
              <div class="me-vote">
                <span>15人赞</span>
                <span><Icon type="chatbox" />&nbsp;回复</span>
              </div>
            </div>
            <div class="you">
              <div class="you-item">
                <div class="you-info"><a href="">章</a><span>:&emsp;哇涩</span></div>
                <div class="you-time"><span>2018080 12:00</span>&emsp;<span><Icon type="chatbox" />&nbsp;回复</span></div>
              </div>
              <div class="you-item">
                <div class="you-info"><a href="">章</a><span>:&emsp;哇涩</span></div>
                <div class="you-time"><span>2018080 12:00</span>&emsp;<span><Icon type="chatbox" />&nbsp;回复</span></div>
              </div>
              <div class="you-item">
                <div class="you-info"><a href="">章</a><span>:&emsp;哇涩</span></div>
                <div class="you-time"><span>2018080 12:00</span>&emsp;<span><Icon type="chatbox" />&nbsp;回复</span></div>
              </div>
              <div class="you-item">
                <div class="you-info"><a href="">章</a><span>:&emsp;哇涩</span></div>
                <div class="you-time"><span>2018080 12:00</span>&emsp;<span><Icon type="chatbox" />&nbsp;回复</span></div>
              </div>
            </div>
            <div class="operate">
              <span><Icon type="compose"/>添加新评论&emsp;|&emsp;</span>
              <span>还有6条评论，</span>
              <span class="operate-unfold">展开查看</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right-1">
          <img :src="details.user.headimg" alt="">
          <div class="right-1-info">
            <span class="right-1-name">{{details.user.name}}</span>&emsp;
            <el-button class="right-sl-btn" round @click="collectTeacher">
              {{details.user.is_attention ? '取消关注' : '+关注'}}
            </el-button>
          </div>
          <div class="right-1-late">最近更新：{{details.user.update}}</div>
          <div class="right-1-desc">简介：{{details.user.remark}}</div>
        </div>
        <!-- <div
          class="right-2"
          v-for="(item, index) of details.user.fudao"
          :key="index"
        >
          <div class="right-2-head">
            <h3>{{item.title}}</h3>&emsp;
            <el-button class="right-sl-btn" round>更多&nbsp;></el-button>
          </div>
          <h3 class="right-2-title"><Icon type="ios-videocam"></Icon>辅导内容：{{item.info_des}}</h3>
          <div class="right-2-main">
            <div class="right-2-time">辅导时间：{{item.open_date}}</div>
            <div class="right-2-price">
              <span>价格：{{item.price}}</span>
              <span>人数: {{item.baoming_count}}</span>
            </div>
            <el-button class="right-lg-btn" round v-if="!item.is_baoming">马上报名</el-button>
          </div>
        </div> -->
        <div class="right-3">
          <div class="right-3-head">
            <h3>相关视频</h3>&emsp;
            <el-button class="right-sl-btn" round @click="() => gotoPage('allVideo')">更多&nbsp;></el-button>
          </div>
          <ul>
            <li
              class="right-3-item"
              v-for="(item, index) of details.user.course"
              :key="index"
            >
              <Icon type="social-youtube"></Icon>
              <span>{{item.title}}</span>
            </li>
          </ul>
        </div>
        <div class="right-3">
          <div class="right-3-head">
            <h3>相关文章</h3>&emsp;
            <el-button class="right-sl-btn" round @click="() => gotoPage('article')">更多&nbsp;></el-button>
          </div>
          <ul>
            <li
              class="right-3-item"
              v-for="(item, index) of details.user.news"
              :key="index"
            >
              <Icon type="document"></Icon>
              <span>{{item.title}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
