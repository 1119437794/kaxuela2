<style scoped lang="less">
  @import 'scoped.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div>
    <header class="sso_header">
      <a href="http://www.lagou.com" class="logo "> </a>
    </header>
    <section class="content_box cleafix">
      <div class="left_area fl">
        <div class="form_head">
          <ul class="form_head clearfix">
            <li class="active" data-lg-tj-id="1Us0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull"> 密码登录 </li>
            <li data-lg-tj-id="1Ut0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" class=""> 验证码登录 </li>
          </ul>
          <span class="tab_active" style="left: 0px;"></span>
        </div>
        <div class="form_body" data-view="passwordLogin" style="display: block;">
          <form class="active" action="javascript:;">
            <div class="input_item clearfix" data-propertyname="username" data-controltype="Phone" style="display: block;">
              <input type="text" class="input input_white" name="" placeholder="请输入常用手机号/邮箱" data-required="required" autocomplete="off" />
            </div>
            <div class="input_item clearfix" data-propertyname="password" data-controltype="Password" style="display: block;">
              <input type="password" class="input input_white" name="" placeholder="请输入密码" data-required="required" autocomplete="off" />
            </div>
            <div class="input_item clearfix" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style="display: none;">
              <div class="input_group clearfix">
                <input type="text" class="input input_white verify_code_input fl" name="" placeholder="请证明你不是机器人" data-required="required" autocomplete="off" />
                <img src="" alt="点击重试" class="yzm" width="98" height="40" />
                <a rel="nofollow" href="javascript:;" class="reflash"></a>
              </div>
            </div>
            <div class="input_item clearfix">
              <a rel="nofollow" href="https://passport.lagou.com/accountPwd/toReset.html" class="forgot_pwd">忘记密码？</a>
            </div>
            <div class="input_item btn_group clearfix" data-propertyname="submit" data-controltype="Botton" style="display: block;">
              <input type="submit" class="btn btn_green btn_active btn_block btn_lg" value="登&nbsp;录" data-lg-tj-id="1j90" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" />
            </div>
          </form>
        </div>
        <div class="form_body" data-view="codeLogin" style="display: none;">
          <form action="javascript:;">
            <div class="input_item clearfix" data-propertyname="username" data-controltype="Phone" style="display: block;">
              <!--
           @require "pc/modules/country-code/main.js"
           @require "pc/modules/country-code/main.less"
       -->
              <span class="area_code">0086</span>
              <div class="area_code_list" style="display: none;">
                <dl class="code_list_main">
                  <dt>
                    常用
                  </dt>
                  <dd>
                    中国
                    <span>0086</span>
                  </dd>
                  <dd>
                    中国香港
                    <span>00852</span>
                  </dd>
                  <dd>
                    中国台湾
                    <span>00886</span>
                  </dd>
                  <dd>
                    中国澳门
                    <span>00853</span>
                  </dd>
                  <dd>
                    美国
                    <span>001</span>
                  </dd>
                  <dt>
                    A
                  </dt>
                  <dd>
                    澳大利亚
                    <span>0061</span>
                  </dd>
                  <dd>
                    中国澳门
                    <span>00853</span>
                  </dd>
                  <dt>
                    B
                  </dt>
                  <dd>
                    巴西
                    <span>0055</span>
                  </dd>
                  <dt>
                    D
                  </dt>
                  <dd>
                    德国
                    <span>0049</span>
                  </dd>
                  <dt>
                    E
                  </dt>
                  <dd>
                    俄罗斯
                    <span>007</span>
                  </dd>
                  <dt>
                    F
                  </dt>
                  <dd>
                    法国
                    <span>0033</span>
                  </dd>
                  <dt>
                    H
                  </dt>
                  <dd>
                    韩国
                    <span>0082</span>
                  </dd>
                  <dt>
                    J
                  </dt>
                  <dd>
                    加拿大
                    <span>001</span>
                  </dd>
                  <dt>
                    M
                  </dt>
                  <dd>
                    马来西亚
                    <span>0060</span>
                  </dd>
                  <dd>
                    美国
                    <span>001</span>
                  </dd>
                  <dt>
                    R
                  </dt>
                  <dd>
                    日本
                    <span>0081</span>
                  </dd>
                  <dt>
                    T
                  </dt>
                  <dd>
                    中国台湾
                    <span>00886</span>
                  </dd>
                  <dd>
                    泰国
                    <span>0066</span>
                  </dd>
                  <dt>
                    X
                  </dt>
                  <dd>
                    中国香港
                    <span>00852</span>
                  </dd>
                  <dd>
                    新加坡
                    <span>0065</span>
                  </dd>
                  <dt>
                    Y
                  </dt>
                  <dd>
                    印度
                    <span>0091</span>
                  </dd>
                  <dd>
                    英国
                    <span>0044</span>
                  </dd>
                  <dt>
                    Z
                  </dt>
                  <dd>
                    中国
                    <span>0086</span>
                  </dd>
                </dl>
                <p class="tips">如果没有找到您的所在归属地，请拨打客服电话4006282835解决。</p>
              </div>
              <input type="text" class="input input_white" name="" placeholder="请输入常用手机号" data-required="required" autocomplete="off" />
            </div>
            <div class="input_item clearfix" data-propertyname="request_form_verifyCode" data-controltype="VerifyCode" style="display: block;">
              <div class="input_group clearfix">
                <input type="text" class="input input_white verify_code_input fl" name="" placeholder="请证明你不是机器人" data-required="required" autocomplete="off" />
                <img src="https://passport.lagou.com/vcode/create?from=login&amp;refresh=1526309503112" alt="点击重试" class="yzm" width="98" height="40" />
                <a rel="nofollow" href="javascript:;" class="reflash"></a>
              </div>
            </div>
            <div class="input_item" data-propertyname="phoneVerificationCode" data-controltype="PhoneVerificationCode" style="display: block;">
              <div class="input_group clearfix">
                <input type="text" class="input input_white first_child" name="" placeholder="请输入验证码" data-required="required" autocomplete="off" />
                <input type="button" class="btn btn_active last_child" value="获取验证码" data-required="required" data-lg-tj-id="1UG0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" />
              </div>
            </div>
            <div class="input_item verify_tips" data-propertyname="autoPhoneVerificationCode" data-controltype="PhoneVerificationCode" style="display: block;">
              <p class="verify_tips_main" style="display: none;">收不到短信？请使用 <input type="button" class="auto_phone" value="获取验证码" /> </p>
              <p class="verify_tips_count_down" style="display: none;">语音发送成功</p>
            </div>
            <div class="input_item btn_group clearfix" data-propertyname="submit" data-controltype="Botton" style="display: block;">
              <input type="submit" class="btn btn_green btn_active btn_block btn_lg" value="登&nbsp;录" data-lg-tj-id="1Uu0" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" />
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
