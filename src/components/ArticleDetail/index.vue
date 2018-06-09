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
        <h3 class="title">这座城市很大</h3>
        <ul class="count">
          <li class="num">
            <Icon type="eye" size="18"/>&nbsp;33
          </li>
          <li class="num">
            <Icon type="chatbox" size="18"></Icon>&nbsp;33
          </li>
          <li class="num">
            <Icon type="heart" size="18"></Icon>&nbsp;33
          </li>
        </ul>
        <p class="content">
                    之前，一个朋友和我说：“上海，这是一座你走的越多就会越喜欢的城市。现在，我越来
          越相信这句话。每个周末。我都会带上相机，随意走进那些上海的大街小巷里，去记录属
          于自己和这个城市的故事.从产品层面，我分析了他的代价，假如使用阿里云或者腾讯云
          提供的服务，光是CDN服务的费用，就是一笔天文数字。CDN的加速服务，按0.25元
          /G算好了，如果每天有50万用户在线，大家每人平均看了0.5G的内容，那么这一天要
          交给服务提供商的费用为50*10000*0.5*0.25=6.25万，那么一个月大概是200万，一
          年大概2500万。当然上面还没有算存储，及分发的的费用 ；APP团队的研发费用；运营
          团队费用。总之这个APP存活下来，一年5000万是最低保障。

          那么按常规的盈利方式，广告来说，它可以收到这么多的广告盈利吗? 关键是我在APP里
          基本没有看到相应的广告的痕迹！

          之前，一个朋友和我说：“上海，这是一座你走的越多就会越喜欢的城市。现在，我越来
          越相信这句话。每个周末。我都会带上相机，随意走进那些上海的大街小巷里，去记录属
          于自己和这个城市的故事.从产品层面，我分析了他的代价，假如使用阿里云或者腾讯云
          提供的服务，光是CDN服务的费用，就是一笔天文数字。CDN的加速服务，按0.25元
          /G算好了，如果每天有50万用户在线，大家每人平均看了0.5G的内容，那么这一天要
          交给服务提供商的费用为50*10000*0.5*0.25=6.25万，那么一个月大概是200万，一
          年大概2500万。当然上面还没有算存储，及分发的的费用 ；APP团队的研发费用；运营
          团队费用。总之这个APP存活下来，一年5000万是最低保障。

          那么按常规的盈利方式，广告来说，它可以收到这么多的广告盈利吗? 关键是我在APP里
          基本没有看到相应的广告的痕迹！
        </p>
        <div class="comment">
          <div class="input">
            <img class="head" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <div contenteditable class="text" >
              写下你的评论
              <div class="unlogin">
                <el-button class="right-lg-btn" round>&nbsp;登录&nbsp;</el-button>
                &emsp;<span>后查看更多</span>
              </div>
            </div>
            <!-- <textarea class="text" name="" id="" cols="30" rows="10"></textarea> -->
          </div>
          <div class="total">245条评论</div>
          <div class="dialog">
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
          <img src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
          <div class="right-1-info">
            <span class="right-1-name">小橙子</span>&emsp;
            <el-button class="right-sl-btn" round>+关注</el-button>
          </div>
          <div class="right-1-late">最近更新：20180808 14:00</div>
          <div class="right-1-desc">简介：20180808 14:00</div>
        </div>
        <div class="right-2">
          <div class="right-2-head">
            <h3>辅导课程直播</h3>&emsp;
            <el-button class="right-sl-btn" round>更多&nbsp;></el-button>
          </div>
          <h3 class="right-2-title"><Icon type="ios-videocam"></Icon>辅导内容：Java</h3>
          <div class="right-2-main">
            <div class="right-2-time">辅导时间：xxx</div>
            <div class="right-2-price">
              <span>价格：23</span>
              <span>人数</span>
            </div>
            <el-button class="right-lg-btn" round>马上报名</el-button>
          </div>
        </div>
        <div class="right-2">
          <div class="right-2-head">
            <h3>辅导课程直播</h3>&emsp;
            <el-button class="right-sl-btn" round>更多&nbsp;></el-button>
          </div>
          <h3 class="right-2-title"><Icon type="ios-videocam"></Icon>辅导内容：Java</h3>
          <div class="right-2-main">
            <div class="right-2-time">辅导时间：xxx</div>
            <div class="right-2-price">
              <span>价格：23</span>
              <span>人数</span>
            </div>
            <el-button class="right-lg-btn" round>马上报名</el-button>
          </div>
        </div>
        <div class="right-2">
          <div class="right-2-head">
            <h3>辅导课程直播</h3>&emsp;
            <el-button class="right-sl-btn" round>更多&nbsp;></el-button>
          </div>
          <h3 class="right-2-title"><Icon type="ios-videocam"></Icon>辅导内容：Java</h3>
          <div class="right-2-main">
            <div class="right-2-time">辅导时间：xxx</div>
            <div class="right-2-price">
              <span>价格：23</span>
              <span>人数</span>
            </div>
            <el-button class="right-lg-btn" round>马上报名</el-button>
          </div>
        </div>
        <div class="right-3">
          <div class="right-3-head">
            <h3>相关视频</h3>&emsp;
            <el-button class="right-sl-btn" round>更多&nbsp;></el-button>
          </div>
          <ul>
            <li class="right-3-item">
              <Icon type="social-youtube"></Icon>
              <span>JAVA从入门到ss</span>
            </li>
            <li class="right-3-item">
              <Icon type="social-youtube"></Icon>
              <span>JAVA从入门到ss</span>
            </li>
            <li class="right-3-item">
              <Icon type="social-youtube"></Icon>
              <span>JAVA从入门到ss</span>
            </li><li class="right-3-item">
              <Icon type="social-youtube"></Icon>
              <span>JAVA从入门到ss</span>
            </li>
          </ul>
        </div>
        <div class="right-3">
          <div class="right-3-head">
            <h3>相关文章</h3>&emsp;
            <el-button class="right-sl-btn" round>更多&nbsp;></el-button>
          </div>
          <ul>
            <li class="right-3-item">
              <Icon type="document"></Icon>
              <span>JAVA从入门到ss</span>
            </li>
            <li class="right-3-item">
              <Icon type="document"></Icon>
              <span>JAVA从入门到ss</span>
            </li>
            <li class="right-3-item">
              <Icon type="document"></Icon>
              <span>JAVA从入门到ss</span>
            </li><li class="right-3-item">
              <Icon type="document"></Icon>
              <span>JAVA从入门到ss</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
