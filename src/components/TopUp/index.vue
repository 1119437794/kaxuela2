<style scoped lang="less">
  @import 'scoped.less';
</style>

<script>
export { default } from './model'
</script>
<template>
  <div>
    <div class="header">
      <a href="#" class="logo">
        <img src="" alt="">
      </a>
      <span class="title">账户充值</span>
      <div class="rigth-p">
        账号：几句
      </div>
    </div>
    <div class="container">
      <div class="content">
        <section class="content_box">
          <div class="box-item amout"><lable>可用金额：</lable>￥1.00</div>
          <div class="box-item payment">
            <lable>支付方式：</lable>
            <div class="weixin">
              <img class="icon-weixin" src="../../../static/imgs/weixinpayment.png" />
              微信支付
            </div>
          </div>
          <div class="box-item topup-amount">
            <lable>充值金额：</lable>
            <ul>
              <li @click="chooseAmount(50)" :class="{active: topUpAmount === 50}">50元</li>
              <li @click="chooseAmount(100)" :class="{active: topUpAmount === 100}">100元</li>
              <li @click="chooseAmount(200)" :class="{active: topUpAmount === 200}">200元</li>
            </ul>
          </div>
          <div class="box-item pay-amount">
            <lable>支付金额：</lable>
            <span class="text">￥50.00</span>
          </div>
          <div class="box-item">
            <img class="Qrcode" src="../../../static/imgs/Qrcode.png" alt="">
            <img class="phone" src="../../../static/imgs/phone.png" alt="">
          </div>
        </section>
      </div>
    </div>
    <Footer />
  </div>
</template>
