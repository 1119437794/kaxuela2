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
      <div id="searchForm" class="searchForm clearfix" name="searchForm" action="https://www.lagou.com/jobs/list_" method="get">
       <span role="status" aria-live="polite" class="ui-helper-hidden-accessible"></span>
       <input type="text" id="search_input" class="search_input ui-autocomplete-input" tabindex="1" maxlength="64" autocomplete="off" v-model="searchKey" placeholder="搜索视频" />
       <input type="hidden" name="labelWords" id="labelWords" value="" />
       <input type="hidden" name="fromSearch" id="fromSearch" value="true" />
       <input type="hidden" name="suginput" id="suginput" />
       <input type="submit" id="search_button" class="search_button" value="搜索" data-lg-tj-id="4V00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" @click="submitSearch"/>
      </div>
      <input type="hidden" id="search_py" value="" />
      <input type="hidden" id="isIndex" value="true" />
      <ul class="ui-autocomplete ui-front ui-menu ui-widget ui-widget-content ui-corner-all" id="ui-id-1" tabindex="0" style="display: none;"></ul>
     </div>
     <dl class="hotSearch" data-lg-tj-track-code="index_hotsearch" data-lg-tj-track-type="1">
      <dt>
       热门搜索：
      </dt>
      <dd
        data-lg-tj-id="27u0"
        data-lg-tj-no="0001"
        data-lg-tj-cid="null"
        v-for="(item ,index) of hot"
        :key="index"
      >
        <router-link class="highlight" :to="`/video?id=${item.id}`">{{item.keyword}}</router-link>
      </dd>
     </dl>
    </div>
</template>
