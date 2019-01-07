<template>
  <div class="wrap">
    <div class="login-top">
      <img src="../assets/img/group_02.png" alt="">
    </div>
    <div class="input-form">
      <input type="text" name="loginName" placeholder="用户名">
      <input type="text" name="password" placeholder="密码">
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
      <span>版权所有</span>
      <span>深圳市云客派科技有限公司</span>
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
  .wrap
    width 100%
    height 100%
    position relative
    background #fff
    z-index 10
    .input-form
      box-shadow 4px 4px 2px #AAAAAA;
      border-radius: 4px;
      width 89%
      height 33.9%
      position absolute
      left 5.5%
      right 5.5%
      input
        border-bottom  1px solid #CFE0E7
    .login-btn
      width 76.7%
      height 6.3%
      background-image: linear-gradient(90deg, #3EECAE 0%, #09AED1 100%);
      border-radius: 22.5px;
      position absolute
      top 64.1%
      left 11.5%
      box-sizing border-box
      text-align center
      padding-top 1.5%
      .login-msg
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
    .register
      width 100%
      text-align center
      z-index 100
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
        margin 2rem auto
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
        span
          display block
          line-height 1rem
          width 100%
          
</style>
