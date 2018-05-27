<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
<div class="page-course l-media l-aside-right ">
  <Header />
  <Search />
  <!--置顶条-->
  <nav class="sticky-nav hide" id="js_float_tab" auto-test="mod_sticky_nav">
   <div class="inner-center">
    <ul class="tabs-tt-bar js_tab">
     <li class="tabs-tt active" ref="js_basic_tab">课程概述</li>
     <li class="tabs-tt" ref="js_dir_tab">课程目录</li>
     <li class="tabs-tt" ref="js_comment_tab">学员评论<span class="num js-comment-total">(17)</span></li>
    </ul>
    <div class="btn-join js-apply-btn btn-default js-apply-btn-apply">
     立即购买
    </div>
   </div>
  </nav>
  <!--banner-->
  <section class="section-feature section--course-banner">
   <div class="course-banner inner-center clearfix">
    <!--面包屑-->
    <!-- <nav class="breadcrumb inner-center">
     <a class="breadcrumb-item" href="/course/list">全部课程</a>
     <i class="icon-font i-v-right"></i>
     <a class="breadcrumb-item" href="/course/list?mt=1001">IT&middot;互联网</a>
     <i class="icon-font i-v-right"></i>
     <a class="breadcrumb-item" href="/course/list?mt=1001&amp;st=2001">互联网产品</a>
     <i class="icon-font i-v-right"></i>
     <a class="breadcrumb-item" href="/course/list?mt=1001&amp;st=2001&amp;tt=3003">产品运营</a>
     <i class="icon-font i-v-right"></i>
     <a class="breadcrumb-item item--tt" href="/course/130010">互联网数据分析基础入门【腾讯课堂+起点学院联合出品】</a>
    </nav> -->
    <div id="js-imgtext" class="imgtext-course " auto-test="mod_course_imgtext">
     <div class="img-left--wrap" auto-test="mod_course_imgtext_left">
      <img class="img-left" onerror="this.src='http://9.url.cn/edu/edu_modules/edu-ui/img/nohash/img-err2.png';this.onerror=null;" src="http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAq66sgUnz4YejUwxLaI0UBHmHY5nMGic3Hkqcy2ibOmI21q8kpeCZdcWPa4ibYW3X6WU/510" alt="互联网数据分析基础入门【腾讯课堂+起点学院联合出品】" width="510" height="286" />
      <div id="js-banner-cover" class="banner-cover" style="display: block;">
       <div class="banner-cover-live">
        <a class="banner-cover-play js-expr-btn" href="javascript:void(0);"> <i class="icon-play"></i> </a>
        <div class="banner-cover-live-below">
         <span class="banner-cover-live-tips">试听</span>
        </div>
       </div>
      </div>

     </div>
     <div class="text-right text-right--pay" auto-test="mod_course_imgtext_right">
      <h1 class="page-tt"><span class="title-main">互联网数据分析基础入门【腾讯课堂+起点学院联合出品】</span></h1>
      <div class="tt-below-line">
       <span id="js-statistics-apply" class="line-item statistics-apply"> 255人 购买 </span>
       <i class="icon-sep"></i>
       <span class="line-item statistics-rate"> 好评度 <span class="rate-num"> 94% </span> </span>
       <i class="icon-sep"></i>
       <div class="line-item item--share" id="js_share">
        <div class="hover-tips tips--share" id="js_share_panel">
         <ul class="share-list">
          <li class="share-qq icon-qq" data-to="qq"></li>
          <li class="share-qzone icon-qzone" data-to="qzone"></li>
          <li class="share-weixin icon-weixin" data-to="weixin"></li>
         </ul>
        </div>
       </div>
       <span class="line-item btn-favorite " id="js_fav"> <i class="icon-font i-heart"></i>收藏 </span>
      </div>
      <!-- 班级 -->
      <div class="course-tag hide">
       <div class="f-dropdown">
        <input type="checkbox" id="checkbox_toggle" />
        <label class="nor-link not-sel expand" for="checkbox_toggle"> <span class="txt">全部</span><i class="icon-v icon-font i-v-bottom"></i> </label>
        <div class="f-dropdown-content">
         <ul>
          <a href="/course/list?mt=1001&amp;st=2001&amp;tt=3003&amp;label_filter=%5B%5B%22%E8%85%BE%E8%AE%AF%E8%AF%BE%E5%A0%82%E4%BA%A7%E5%93%81%E5%AD%A6%E9%99%A2%22%5D%5D" report-tdw="module=course_tag&amp;action=click&amp;obj1=all&amp;obj2=/course/list?mt=1001&amp;st=2001&amp;tt=3003&amp;label_filter=%5B%5B%22%E8%85%BE%E8%AE%AF%E8%AF%BE%E5%A0%82%E4%BA%A7%E5%93%81%E5%AD%A6%E9%99%A2%22%5D%5D&amp;ver1=$130010" title="腾讯课堂产品学院"><li>腾讯课堂产品学院</li></a>
         </ul>
        </div>
       </div>
      </div>

      <!-- 价格 -->
      <div class="js-course-price normal-course course-price active" data-termid="100144758">
       <p class="course-price-info "> <span class="price ">&yen;298.00</span> </p>
       <div class="course-price-discount course-jd-tags js-course-jd-tags" style="display:none;">
        <i></i>
        <p>支持分期付款</p>
       </div>
       <div class="course-price-discount js-course-price-discount">
        <div class="course-coupon js-coupon-wrap hide" style="display: none;"></div>
       </div>
      </div>
      <p class="mod-tip hide" id="js-mod-tip"> <i class="icon-font i-alert mod-tip-icon"></i> <span class="js-tip-des">本班因教学质量问题暂时不能报名。</span> <a href="//ke.qq.com/faq.html#id=5" title="查看详情">查看详情</a> </p>
      <!--课程违规提示-->
      <p class="mod-tip hide" id="js-weigui-tip"> <i class="icon-font i-alert mod-tip-icon"></i><span>课程因违反平台规定暂时不能报名。</span> </p>
      <div class="oper-bar" id="js_btn_bar" auto-test="mod_oper_bar">
       <!--
                        追加class disabled表示禁止，btn-primary替换为btn-default则表示已经报名
                        接受赠送
                        立即报名
                        立即学习
                    -->
       <span class="btn-join js-apply-btn btn-default js-apply-btn-apply">立即购买</span>
       <span class="btn-join js-installments-btn  hide"> </span>
      </div>
      <div id="js-partner" class="course-partner" style="display: none;"></div>
     </div>
    </div>
   </div>
  </section>
  <!--package-->
  <!--main-->
  <section id="js-section-main" class="section-main">
   <div class="inner-center clearfix">
    <main class="main">
     <div class="content tabs">
      <div class="tabs-tt-bar js_tab js-tab-nav" id="js_tab">
       <h2 class="tabs-tt active" ref="js_basic_tab" auto-test="mod_tabs_basic">课程概述</h2>
       <h2 class="tabs-tt" ref="js_dir_tab" auto-test="mod_tabs_dir">课程目录</h2>
       <h2 class="tabs-tt" ref="js_comment_tab" auto-test="mod_tabs_comment">学员评论<span class="num js-comment-total">(17)</span></h2>
      </div>
      <div class="tabs-content " id="js_basic_tab">
       <h3 class="guide-tt js-teacher-location" data-teacherlocation="1">老师介绍</h3>
       <div class="guide-bd">
        <div class="teacher-list">
         <div class="teacher-item">
          <a href="/teacher/3314527786" class="img-left 3314527786" target="_blank"><img src="http://10.url.cn/eth/ajNVdqHZLLBxGK5dFyTRiahKvhANSozWHxwbNdcR02MCjWEGQmUZqlPZTC0bicwxerPwBoaayL30U/" alt="Wendy" /></a>
          <div class="text-right">
           <h4 class="text-tt"> <a class="tt-link js-teacher-name" href="/teacher/3314527786" title="Wendy" target="_blank"> Wendy </a> </h4>
           <div class="text-intro js-teacher-intro" title="起点学院金牌导师，BAT等一线互联网公司的实战型产品、运营专家。">
            起点学院金牌导师，BAT等一线互联网公司的实战型产品、运营专家。
           </div>
          </div>
         </div>
        </div>
       </div>
       <div class="guide-bd">
        <table class="tb-course">
         <tbody>
          <tr>
           <th>简&emsp;介</th>
           <td>针对互联网产品经理、运营、市场的核心工作，详细解读数据分析的基本流程、常用数据指标、常用数据分析思路、数据分析实例应用、数据可视化，帮助互联网从业人员提升数据思维，提高数据分析能力，增强职场竞争力</td>
          </tr>
         </tbody>
        </table>
        <div class="intro-course">
         <div style="text-align: center;">
          <img data-height="2403" data-width="700" src="http://10.url.cn/qqke_course_info/ajNVdqHZLLD1gJVInRaRKf3gRN1yLh1P8cVibxGcUCiaDia4HctjdTDta3xdoiausmYzwBlmqPF4uyY/" />
          <img data-height="3680" data-width="700" src="http://10.url.cn/qqke_course_info/ajNVdqHZLLAPA28fSTxlDwpaO9QRfTQq1nkxjlyvSnhScsDapbMnmIfLiaz4jkewSJDiaYY7o5JpY/" />
         </div>
        </div>
       </div>
      </div>
      <div class="tabs-content hide" id="js_dir_tab">
       <div class="js-chapter-list pt20">
        <div class="task-chapter">
         <!-- <h3 class="chapter-tt">第一章 </h3> -->
         <div class="task-part-list">
          <div class="task-part-item">
           <div class="task-part-hd">
            <span class="tt-prefix">01</span>
            <h3 class="part-tt">数据分析基础</h3>
           </div>
           <div class="task-task-list">
            <a class="task-task-item task-item-jump js-expr-video-link js-task-login js-expr-item" href="/webcourse/index.html#course_id=130010&amp;term_id=100144758&amp;taid=484867448110042&amp;vid=n14117zhpqe" report-tdw="ver1=130010&amp;ver2=100144758&amp;ver3=484867448110042&amp;ver5=2&amp;ver7=undefined&amp;module=watch_without_sign&amp;action=access_class" data-type="video" target="_blank"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】学习数据分析的意义">【录播】学习数据分析的意义</span><span class="tt-suffix">(27分钟)</span> <span class="task-tt-expr">免费试学</span> </p> </a>
            <a class="task-task-item task-item-jump js-expr-video-link js-task-login js-expr-item" href="/webcourse/index.html#course_id=130010&amp;term_id=100144758&amp;taid=484871743077338&amp;vid=q1411w4ok48" report-tdw="ver1=130010&amp;ver2=100144758&amp;ver3=484871743077338&amp;ver5=2&amp;ver7=undefined&amp;module=watch_without_sign&amp;action=access_class" data-type="video" target="_blank"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】数据分析的具体流程">【录播】数据分析的具体流程</span><span class="tt-suffix">(9分钟)</span> <span class="task-tt-expr">免费试学</span> </p> </a>
            <!-- end for -->
           </div>
          </div>
         </div>
        </div>
        <div class="js-chapter-list pt20">
         <div class="task-chapter">
          <!-- <h3 class="chapter-tt">第二章 </h3> -->
          <div class="task-part-list">
           <div class="task-part-item">
            <div class="task-part-hd">
             <span class="tt-prefix">02</span>
             <h3 class="part-tt">常用数据指标</h3>
            </div>
            <div class="task-task-list">
             <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】产品流量类指标">【录播】产品流量类指标</span><span class="tt-suffix">(68分钟)</span> </p> </a>
             <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】产品会员类指标">【录播】产品会员类指标</span><span class="tt-suffix">(18分钟)</span> </p> </a>
             <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】成本控制类指标">【录播】成本控制类指标</span><span class="tt-suffix">(14分钟)</span> </p> </a>
             <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】收益控制流指标">【录播】收益控制流指标</span><span class="tt-suffix">(14分钟)</span> </p> </a>
             <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】AARRR模型和留存率">【录播】AARRR模型和留存率</span><span class="tt-suffix">(37分钟)</span> </p> </a>
             <!-- end for -->
            </div>
           </div>
          </div>
         </div>
         <div class="js-chapter-list pt20">
          <div class="task-chapter">
           <!-- <h3 class="chapter-tt">第三章 </h3> -->
           <div class="task-part-list">
            <div class="task-part-item">
             <div class="task-part-hd">
              <span class="tt-prefix">03</span>
              <h3 class="part-tt">常用数据分析思路</h3>
             </div>
             <div class="task-task-list">
              <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】数据分析的思路及方法和模型">【录播】数据分析的思路及方法和模型</span><span class="tt-suffix">(46分钟)</span> </p> </a>
              <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】电商人必备数据指标">【录播】电商人必备数据指标</span><span class="tt-suffix">(17分钟)</span> </p> </a>
              <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】移动产品数据分析的五大维度">【录播】移动产品数据分析的五大维度</span><span class="tt-suffix">(18分钟)</span> </p> </a>
              <!-- end for -->
             </div>
            </div>
           </div>
          </div>
          <div class="js-chapter-list pt20">
           <div class="task-chapter">
            <!-- <h3 class="chapter-tt">第四章 </h3> -->
            <div class="task-part-list">
             <div class="task-part-item">
              <div class="task-part-hd">
               <span class="tt-prefix">04</span>
               <h3 class="part-tt">数据分析应用实例</h3>
              </div>
              <div class="task-task-list">
               <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】产品生命周期的数据分析依据">【录播】产品生命周期的数据分析依据</span><span class="tt-suffix">(30分钟)</span> </p> </a>
               <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】巧用“用户画像”进行个性化运营">【录播】巧用“用户画像”进行个性化运营</span><span class="tt-suffix">(47分钟)</span> </p> </a>
               <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】竞品分析的真正用意—发现创新点">【录播】竞品分析的真正用意—发现创新点</span><span class="tt-suffix">(17分钟)</span> </p> </a>
               <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】网站分析工具的选择">【录播】网站分析工具的选择</span><span class="tt-suffix">(40分钟)</span> </p> </a>
               <!-- end for -->
              </div>
             </div>
            </div>
           </div>
           <div class="js-chapter-list pt20">
            <div class="task-chapter">
             <!-- <h3 class="chapter-tt">第五章 </h3> -->
             <div class="task-part-list">
              <div class="task-part-item">
               <div class="task-part-hd">
                <span class="tt-prefix">05</span>
                <h3 class="part-tt">数据可视化与报告的撰写</h3>
               </div>
               <div class="task-task-list">
                <a class="task-task-item task-item-nojump" href="javascript:void(0);"> <i class="icon-font i-course-record item-icon"></i> <p class="task-tt"> <span class="task-tt-text" title="【录播】数据可视化与报告的撰写">【录播】数据可视化与报告的撰写</span><span class="tt-suffix">(52分钟)</span> </p> </a>
                <!-- end for -->
               </div>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
      </div>
      <div class="tabs-content hide" id="js_comment_tab">
       <div class="sm-cont sm-main-inner ">
        <div class="mod-comments" id="js-comments">
         <div class="mod-comments-list" id="js-comments-list">
         </div>
        </div>
       </div>
      </div>
     </div>

    </main>
    <aside class="aside-right" auto-test="mod_course_aside">
     <div class="aside-recommend hide"></div>
     <div class="aside-blocks">
      <div class="aside-block block--agency" auto-test="mod_course_aside_agency">
       <div class="block-bd">
        <h4 class="agency-tt">
         <div class="tt-cover-url">
          <a href="//qidianla.ke.qq.com" target="_blank"> <img src="http://p.qpic.cn/qqcourse/QFzQYCgCrxmVMUicPtaJBa7y6CuyCuicZxUCjdCHQWeJxmKTCSPaMVXv7eqkGYrS15/" alt="起点学院" width="64" height="64" /> </a>
         </div>
         <div class="tt-cover-name">
          <a class="tt-link js-agency-name" href="//qidianla.ke.qq.com" title="起点学院" target="_blank"> 起点学院 </a>
          <a class="icon-renzheng-l" href="//ke.qq.com/faq.html#id=10" target="_blank" title="互联网产品类目认证机构"></a>
         </div> </h4>
        <ul class="tree-list">
         <li> <p class="item-tt">好评度</p> <span class="item-num"> 93% </span> </li>
         <li> <p class="item-tt">课程数</p> <span class="item-num js-item-num" data-num="107">107</span> </li>
         <li> <p class="item-tt">学生数</p> <span class="item-num js-item-num" data-num="376139">37万</span> </li>
        </ul>
        <div class="agency-summary">
         起点学院，目标成为互联网黄埔军校，是人人都是产品经理旗下品牌，专注于为互联网从业者提供专业化学习产品经理、运营、交互设计、用户体验、axure、文档类、数据分析扥相关技能服务。
        </div>
       </div>
      </div>
      <!-- <div class="aside-block block--contact" auto-test="mod_course_aside_contact">
       <h3 class="block-tt">加群沟通</h3>
       <div class="block-bd">
        <ul class="contact-list">
         <li class=""> <i class="item-icon icon-font i-group"></i> <a href="tencent://VisitPublicGroup/?subcmd=VisitPublicGroup&amp;param=7B22457874506172616D223A7B226170704964223A2230227D2C2267726F757055696E223A3137373438343433302C2276697369746F72223A317D&amp;fuin=416921332" class="item-tt js-group-entrance" title="起点学院学习12群" data-gc="177484430" target="_blank"> 起点学院学习12群 </a> <p class="gray">群号: 177484430</p> </li>
        </ul>
       </div>
      </div> -->
     </div>
     <div class="aside-course hide"></div>
    </aside>
   </div>
  </section>
  <!--推荐课程-->
  <section class="section-postscript section--recommend" auto-test="mod_recommend_courses">
   <div class="inner-center">
    <h3 class="section-tt">老师还为你推荐了以下几门课程</h3>
    <div class="section-bd course-card-list-single-wrap">
     <!--
    opt = {
        simplify: true,  // 简化模式，少了第二行
        sIndex:   1,     // 首页楼层上报用
        fIndex:   2,     // 首页楼层上报用
        noAgency: true,  // 简化模式下不展示机构信息，展示学习人数
        showOrigin: true,  / 是否在价格后显示原价
        hideStatus: true,// 隐藏课程状态栏
        lazyload: true   // 课程图懒加载
    }

 -->
     <ul class="course-card-list" auto-test="">
      <li class="course-card-item"> <a href="//ke.qq.com/course/154754" target="_blank" class="item-img-link" data-id="154754" data-index="1" report-tdw="action=Coursecard_Coursecover-clk&amp;ver1=154754&amp;ver3=1.1" cors-name="course"> <img src="http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDGTClDsicD2QUIOKKVab64ticsicvHbyAZiab7vz8eR36JxURpXG2s6LdvnoVIk9fib3BE/220" alt="如何打造差异化的智能硬件爆品？" title="如何打造差异化的智能硬件爆品？" class="item-img" width="220" height="124" onerror="this.src='http://9.url.cn/edu/lego_modules/edu-ui/0.0.1/img/nohash/img-err2.png';this.onerror=null;" /> </a> <h4 class="item-tt"> <a href="//ke.qq.com/course/154754" target="_blank" class="item-tt-link" title="如何打造差异化的智能硬件爆品？" report-tdw="action=Coursecard_Coursesname-clk&amp;ver1=154754&amp;ver3=1.1" cors-name="course">如何打造差异化的智能硬件爆品？</a> </h4>
       <div class="item-line item-line--bottom">
        <span class="line-cell item-price free">免费</span>
        <span class="line-cell item-user item-user--right"> 405人最近报名 </span>
       </div> </li>
      <li class="course-card-item"> <a href="//ke.qq.com/course/174685" target="_blank" class="item-img-link" data-id="174685" data-index="2" report-tdw="action=Coursecard_Coursecover-clk&amp;ver1=174685&amp;ver3=1.2" cors-name="course"> <img src="http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLAOLuTdykZSpum6PAtYy4hxPg2oR908LlbCwPbYicJvr17cDibzDh93gCEA64gk9nJ18/220" alt="7堂课，教你数据运营成功法则" title="7堂课，教你数据运营成功法则" class="item-img" width="220" height="124" onerror="this.src='http://9.url.cn/edu/lego_modules/edu-ui/0.0.1/img/nohash/img-err2.png';this.onerror=null;" /> </a> <h4 class="item-tt"> <a href="//ke.qq.com/course/174685" target="_blank" class="item-tt-link" title="7堂课，教你数据运营成功法则" report-tdw="action=Coursecard_Coursesname-clk&amp;ver1=174685&amp;ver3=1.2" cors-name="course">7堂课，教你数据运营成功法则</a> </h4>
       <div class="item-line item-line--bottom">
        <span class="line-cell item-price free">免费</span>
        <span class="line-cell item-user item-user--right"> 2094人最近报名 </span>
       </div> </li>
      <li class="course-card-item"> <a href="//ke.qq.com/course/139229" target="_blank" class="item-img-link" data-id="139229" data-index="3" report-tdw="action=Coursecard_Coursecover-clk&amp;ver1=139229&amp;ver3=1.3" cors-name="course"> <img src="http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLBDicW4EtE8IaUSH1qmQd1kVfHUppMNH9hYasaCMz2FcUr2QYUD6gxGc8kk2GLmdCA4/220" alt="前百度产品经理带你深读《用户体验要素》" title="前百度产品经理带你深读《用户体验要素》" class="item-img" width="220" height="124" onerror="this.src='http://9.url.cn/edu/lego_modules/edu-ui/0.0.1/img/nohash/img-err2.png';this.onerror=null;" /> </a> <h4 class="item-tt"> <a href="//ke.qq.com/course/139229" target="_blank" class="item-tt-link" title="前百度产品经理带你深读《用户体验要素》" report-tdw="action=Coursecard_Coursesname-clk&amp;ver1=139229&amp;ver3=1.3" cors-name="course">前百度产品经理带你深读《用户体验要素》</a> </h4>
       <div class="item-line item-line--bottom">
        <span class="line-cell item-price free">免费</span>
        <span class="line-cell item-user item-user--right"> 843人最近报名 </span>
       </div> </li>
      <li class="course-card-item"> <a href="//ke.qq.com/course/233617" target="_blank" class="item-img-link" data-id="233617" data-index="4" report-tdw="action=Coursecard_Coursecover-clk&amp;ver1=233617&amp;ver3=1.4" cors-name="course"> <img src="http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLABIlLCZtapW366GicjGOwEM6NP7W8B2b5qVmvFl3AM6DOic1TKjFiciblLX41E0vRKOO8/220" alt="腾讯产品总监：竞品分析四部曲" title="腾讯产品总监：竞品分析四部曲" class="item-img" width="220" height="124" onerror="this.src='http://9.url.cn/edu/lego_modules/edu-ui/0.0.1/img/nohash/img-err2.png';this.onerror=null;" /> </a> <h4 class="item-tt"> <a href="//ke.qq.com/course/233617" target="_blank" class="item-tt-link" title="腾讯产品总监：竞品分析四部曲" report-tdw="action=Coursecard_Coursesname-clk&amp;ver1=233617&amp;ver3=1.4" cors-name="course">腾讯产品总监：竞品分析四部曲</a> </h4>
       <div class="item-line item-line--bottom">
        <span class="line-cell item-price free">免费</span>
        <span class="line-cell item-user item-user--right"> 660人最近报名 </span>
       </div> </li>
      <li class="course-card-item"> <a href="//ke.qq.com/course/224513" target="_blank" class="item-img-link" data-id="224513" data-index="5" report-tdw="action=Coursecard_Coursecover-clk&amp;ver1=224513&amp;ver3=1.5" cors-name="course"> <img src="http://10.url.cn/qqcourse_logo_ng/ajNVdqHZLLDs5E4GX7DWRVDCqACGibibgjiaBfNe0DTNMtRlzuCTY9PEOUfaMvkiajuwg7KZwH7cdBE/220" alt="从新手村到打Boss，产品经理成长之路" title="从新手村到打Boss，产品经理成长之路" class="item-img" width="220" height="124" onerror="this.src='http://9.url.cn/edu/lego_modules/edu-ui/0.0.1/img/nohash/img-err2.png';this.onerror=null;" /> </a> <h4 class="item-tt"> <a href="//ke.qq.com/course/224513" target="_blank" class="item-tt-link" title="从新手村到打Boss，产品经理成长之路" report-tdw="action=Coursecard_Coursesname-clk&amp;ver1=224513&amp;ver3=1.5" cors-name="course">从新手村到打Boss，产品经理成长之路</a> </h4>
       <div class="item-line item-line--bottom">
        <span class="line-cell item-price free">免费</span>
        <span class="line-cell item-user item-user--right"> 670人最近报名 </span>
       </div> </li>
     </ul>
    </div>
   </div>
  </section>
  <!--包含尾部进来-->
</div>

</template>
