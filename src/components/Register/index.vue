<style scoped lang="less">
  @import 'scoped.less';
</style>
<style lang="less">
  @import './override.less';
</style>
<script>
export { default } from './model'
</script>
<template>
  <div class="container">
    <div class="header">
      <a class="logo" href="">
        <img
          src="../../../static/imgs/logo.png"/>
      </a>
    </div>
    <div class="banner" />
    <div class="content">
      <div class="steps">
        <el-steps :active=registerType :space="120" align-center>
          <el-step title="完善个人信息"></el-step>
          <el-step title="手机验证"></el-step>
        </el-steps>
      </div>
      <el-form
        class="form"
        v-show="registerType === 1"
        :model="registerForm"
        :rules="rules"
        ref="registerForm"
        label-width="100px"
      >
        <el-form-item label="头像" prop="headPortrait">
          <el-upload
            action="http://118.24.77.192/public/upload/img"
            class="avatar-uploader"
            :show-file-list="false"
            :on-success="getImageSuccess"
            :on-preview="beforeAvatarUpload">
            <img v-if="registerForm.imageUrl" :src="registerForm.imageUrl" class="avatar">
            <i v-else class="el-icon-upload2
             avatar-uploader-icon"></i>
            <div slot="tip" class="el-upload__tip avater-upload-tip">
              建议使用真实头像提升真实性、专业性
              支持jpg、jpeg、gif、png,小于10MB
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="用户名" prop="name">
          <el-input
            v-model="registerForm.name"
            placeholder="用户名由英文和数字组成，长度不小于6位"
          ></el-input>
        </el-form-item>
        <el-form-item label="昵称" prop="nickname">
          <el-input
            placeholder="请输入昵称"
            v-model="registerForm.nickname"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            placeholder="请输入密码，有英文和数字组成,长度不小于6位"
            type="password"
            v-model="registerForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input
            placeholder="请输入确认密码"
            type="password"
            v-model="registerForm.confirmPassword"
          ></el-input>
        </el-form-item>
        <el-form-item label="擅长" prop="goodAt">
          <el-input
            placeholder="请输入擅长内容"
            v-model="registerForm.goodAt"
          ></el-input>
        </el-form-item>
        <el-form-item class="next">
          <div
            @click="submitForm('registerForm')"
            class="btn btn_green btn-radius"
          >下一步</div>
        </el-form-item>
      </el-form>
      <el-form
        class="form"
        v-show="registerType === 2"
        :model="registerPhoneForm"
        :rules="phoneRules"
        ref="registerPhoneForm"
        label-width="100px"
      >
        <el-form-item label="手机" prop="phone">
          <el-input
            placeholder="请输入常用手机号"
            v-model="registerPhoneForm.phone"
          ></el-input>
        </el-form-item>
        <el-form-item prop="verificateCode">
          <el-input
            placeholder="请输入验证码"
            v-model="registerPhoneForm.verificateCode"
          >
            <span slot="append">获取验证码</span>
          </el-input>
        </el-form-item>
        <el-form-item class="submit">
          <div @click="submit('registerPhoneForm')" class="btn btn_green btn-radius">提交</div>
        </el-form-item>
      </el-form>
    </div>
    <Footer />
  </div>
</template>
