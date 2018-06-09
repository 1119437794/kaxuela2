<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div>
    <Header />
    <div class="carousel">
      <h3 class="title">向超级大牛学习</h3>
      <swiper
        class="main card"
        :options="swiperOption">
          <swiper-slide class="slide">
            <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <span class="text">消证字</span>
            <span class="text">且屠宰</span>
          </swiper-slide>
         <swiper-slide class="slide">
            <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <span class="text">消证字</span>
            <span class="text">且屠宰</span>
          </swiper-slide>
          <swiper-slide class="slide">
            <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <span class="text">消证字</span>
            <span class="text">且屠宰</span>
          </swiper-slide>
          <swiper-slide class="slide">
            <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <span class="text">消证字</span>
            <span class="text">且屠宰</span>
          </swiper-slide>
          <swiper-slide class="slide">
            <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <span class="text">消证字</span>
            <span class="text">且屠宰</span>
          </swiper-slide>
          <swiper-slide class="slide">
            <img class="thumb" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" alt="">
            <span class="text">消证字</span>
            <span class="text">且屠宰</span>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
    <Search />
    <div class="main box">
     <DaNiuItem />
     <DaNiuItem />
     <DaNiuItem />
     <DaNiuItem />
     <DaNiuItem />
     <DaNiuItem />
     <DaNiuItem />
     <DaNiuItem />
    </div>
    <el-pagination
      class="pagination"
      background
      layout="prev, pager, next"
      :total="1000">
    </el-pagination>
    <Footer />
  </div>
</template>
