<style scoped lang="less">
  @import 'scoped.less';
</style>

<script>
export { default } from './model'
</script>
<template>
  <div class="container">
    <div class="content">
      <section class="content_box">
        <div class="box-item amout"><lable>商品订单：</lable>32454756876u97856</div>
        <div class="box-item amout"><lable>支付金额：</lable>￥1.00</div>
        <div class="box-item payment">
          <lable>支付方式：</lable>
          <div class="weixin">
            <img class="icon-weixin" src="../../../../../static/imgs/weixinpayment.png" />
            微信支付
          </div>
        </div>
        <div class="box-item img-box">
          <img class="Qrcode" src="../../../../../static/imgs/Qrcode.png" alt="">
          <img class="phone" src="../../../../../static/imgs/phone.png" alt="">
        </div>
      </section>
    </div>
  </div>
</template>
