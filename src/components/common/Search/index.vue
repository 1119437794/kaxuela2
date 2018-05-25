<style scoped>
  @import './scoped.less';
</style>
<style>
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="search-wrapper">
     <div id="search_box" class="search_box" data-lg-tj-track-code="index_search" data-lg-tj-track-type="1">
      <form id="searchForm" class="searchForm clearfix" name="searchForm" action="https://www.lagou.com/jobs/list_" method="get">
       <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
       <input type="text" id="search_input" class="search_input ui-autocomplete-input" tabindex="1" maxlength="64" autocomplete="off" value="" placeholder="搜索视频" />
       <input type="hidden" name="labelWords" id="labelWords" value="" />
       <input type="hidden" name="fromSearch" id="fromSearch" value="true" />
       <input type="hidden" name="suginput" id="suginput" />
       <input type="submit" id="search_button" class="search_button" value="搜索" data-lg-tj-id="4V00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" />
      </form>
      <input type="hidden" id="search_py" value="" />
      <input type="hidden" id="isIndex" value="true" />
      <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style="display: none;"></ul>
     </div>
     <dl class="hotSearch" data-lg-tj-track-code="index_hotsearch" data-lg-tj-track-type="1">
      <dt>
       热门搜索：
      </dt>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0001" data-lg-tj-cid="null">
       <a href="https://www.lagou.com/jobs/list_%E6%96%B0%E5%AA%92%E4%BD%93%E8%BF%90%E8%90%A5?labelWords=sug&amp;fromSearch=true&amp;suginput=%E6%96%B0%E5%AA%92%E4%BD%93" class="highlight" target="_self">新媒体运营</a>
      </dd>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0002" data-lg-tj-cid="null">
       <a href="http://www.lagou.com/zhaopin/shichangtuiguang/?labelWords=label" class="highlight" target="_self">市场推广</a>
      </dd>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0003" data-lg-tj-cid="null">
       <a href="http://www.lagou.com/jobs/list_%E4%BA%A7%E5%93%81%E8%BF%90%E8%90%A5?labelWords=&amp;fromSearch=true&amp;suginput" class="highlight" target="_self">产品运营</a>
      </dd>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0004" data-lg-tj-cid="null">
       <a href="https://www.lagou.com/zhaopin/PHP/?labelWords=label" class="highlight" target="_self">PHP</a>
      </dd>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0005" data-lg-tj-cid="null">
       <a href="https://www.lagou.com/zhaopin/xiaoshoujingli/?labelWords=label" class="highlight" target="_self">销售经理</a>
      </dd>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0006" data-lg-tj-cid="null">
       <a href="https://www.lagou.com/zhaopin/chanpinjingli1/?labelWords=label" class="highlight" target="_self">产品经理</a>
      </dd>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0007" data-lg-tj-cid="null">
       <a href="https://www.lagou.com/zhaopin/C++/?labelWords=label" class="highlight" target="_self">C++</a>
      </dd>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0008" data-lg-tj-cid="null">
       <a href="https://www.lagou.com/jobs/list_java?city=%E5%8C%97%E4%BA%AC&amp;cl=false&amp;fromSearch=true&amp;labelWords=&amp;suginput=" class="highlight" target="_self">Java</a>
      </dd>
      <dd data-lg-tj-id="27u0" data-lg-tj-no="0009" data-lg-tj-cid="null">
       <a href="http://www.lagou.com/app/download.html?source=search_app" class="highlight">拉勾APP</a>
      </dd>
     </dl>
    </div>
</template>
