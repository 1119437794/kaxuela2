<style scoped lang="less">
  @import 'scoped.less';
</style>
<style lang="less">
  @import 'override.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div v-slideIn="200">
    <header class="sso_header">
      <a href="http://www.lagou.com" class="logo "> </a>
    </header>
    <section class="content_box cleafix">
      <div class="left_area fl">
        <div class="form_head">
          <ul class="form_head clearfix">
            <li
              :class="{active: tabPanel==='passwordLogin'}"
              @click="switchTab('passwordLogin')"
            > 密码登录 </li>
            <li
              :class="{active: tabPanel==='codeLogin'}"
              @click="switchTab('codeLogin')"
            > 验证码登录 </li>
          </ul>
          <span class="tab_active" :class="{right_active: tabPanel==='codeLogin'}"></span>
        </div>
        <div class="form_body" data-view="passwordLogin" v-show="tabPanel==='passwordLogin'">
          <el-form
            :model="formData"
            status-icon
            ref="formData"
            class="demo-ruleForm"
            :rules="dataRules"
          >
            <el-form-item prop="user">
              <el-input
                class="line-input"
                placeholder="请输入常用手机号/邮箱"
                type="text"
                v-model="formData.user"
              ></el-input>
            </el-form-item>
            <el-form-item prop="passWord">
              <el-input
                class="line-input"
                placeholder="请输入密码"
                type="password"
                @keyup.native.enter="submitForm('formData')"
                v-model="formData.passWord"
                auto-complete="off"
              ></el-input>
            </el-form-item>
            <div class="forgit_password">
              <a  href="#">忘记密码?</a>
            </div>
            <el-form-item>
              <div
                class="btn btn_green btn_block btn-radius"
                @click="submitForm('formData')"
              >登录</div>
            </el-form-item>
          </el-form>
        </div>
        <div class="form_body" data-view="codeLogin" v-show="tabPanel==='codeLogin'">
          <el-form
            :model="formCode"
            status-icon
            ref="formCode"
            class="demo-ruleForm"
            :rules="codeRules"
          >
            <el-form-item prop="phoneNumber">
              <el-input
                class="line-input"
                placeholder="请输入常用手机号"
                type="text"
                v-model="formCode.phoneNumber"
              ></el-input>
            </el-form-item>
            <el-form-item prop="vCode">
              <el-input
                class="line-input"
                placeholder="请证明你不是机器人"
                v-model="formCode.vCode"
                auto-complete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="verificationCode">
              <el-input
                class="line-input"
                placeholder="请输入验证码"
                v-model="formCode.verificationCode"
                auto-complete="off"
              >
                <el-button slot="append">获取验证码</el-button>
              </el-input>
            </el-form-item>
            <el-form-item>
              <div class="btn btn_green btn_block btn-radius" @click="submitCodeForm('formCode')">登录</div>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div class="divider fl code_divider"></div>
      <div class="right_area fl">
        <h5>还没有帐号:</h5>
        <a href="/register" class="register_now">立即注册</a>
        <i class="el-icon-d-arrow-right mainColor"></i>
      </div>
    </section>
  </div>
</template>
