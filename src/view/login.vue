<template>
  <div class="wrap">
    <div class="login-top">
      <img src="../assets/img/group_02.png" alt="">
    </div>
    <div class="input-form">
      <div class="userWrap">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yonghu"></use>
        </svg>
        <input type="text" name="loginName" class="loginName" placeholder="用户名">
      </div>
      <div class="passwordWrap">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-suo"></use>
        </svg>
        <input type="text" name="password" class="password" placeholder="密码">
      </div>
    </div>
    <div class="login-btn">
      <span class="login-msg">登录</span>
    </div>
    <div class="register">
      <span class="register-msg">注册</span>
    </div>
    <div class="copyContent">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-banquan"></use>
      </svg>
      <span class="copymsg">版权所有</span>
      <span class="copymsg">深圳市云客派科技有限公司</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style scoped lang='stylus'>
  //像素自动转rem,怎么做到的
  /*后面需要根据情况把z-index给去掉*/
  /*为什么这里会需要滚动条呢(已解决)*/
  /*宽度为什么百分百会那么短*/
  @import "../common/stylus/mixins.styl"
  .wrap
    height 100%
    position relative
    background #fff
    z-index 10
    overflow-y hidden
    .input-form
      box-shadow 4px 4px 2px #AAAAAA;
      border-radius: 4px;
      width 89%
      height 33.9%
      position absolute
      left 5.5%
      .userWrap
        height 30px
        line-height 30px
        bottom-border-1px(#CFE0E7,300px)
        .icon
          width 20px
          margin 0 10px 0 10px
          color: green
          float left
          height 100%
        .loginName
          float left
          width 80%
      .passwordWrap
        margin-top 5px
        bottom-border-1px(#CFE0E7,300px)
        height 30px
        line-height 30px
        .icon
          width 20px
          color: green
          float left
          margin 0 10px 0 10px
          height 100%
          vertical-align middle
        .password
          width 80%
          float left
    .login-btn
      width 280px
      height 42px
      line-height 42px
      background-image: linear-gradient(90deg, #3EECAE 0%, #09AED1 100%);
      border-radius: 22.5px;
      position absolute
      top 64.1%
      left 12.5%
      text-align center
      .login-msg
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
    .register
      text-align center
      margin-top 69%
      .register-msg
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #0CB2CF;
        letter-spacing: 0;
    .copyContent
        display flex
        justify-content center
        flex-wrap wrap
        margin 90px auto
        text-align center
        width 39.5%
        height 10.6%
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #A3A3A3;
        letter-spacing: 0;
        text-align: center;
      .icon
        display block
        width 100%
        font-size 22px
        color black
      .copymsg
        display block
        height 20px
        line-height 20px


</style>
