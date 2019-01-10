<template>
  <div class="wrap">
    <div class="login-top">
      <img src="../assets/img/login_top_bg.png" alt="">
    </div>
    <div class="input-form">
      <div class="userWrap">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-shouji"></use>
        </svg>
        <input type="text" name="phone" class="phone" placeholder="手机号码">
      </div>
      <div class="passwordWrap">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-securityCode-b"></use>
        </svg>
        <input type="password" name="vCode" class="vCode" placeholder="手机验证码">
      </div>
      <van-button type="default" class="button" size="small" @click="count" v-if="countTime==0">{{codeText}}</van-button>
      <van-button type="default" class="button" size="small" @click="count" v-else disabled>剩余{{countTime}}s</van-button>
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
import cookie from "../utils/cookie.js";

export default {
    components:{
    },
    data() {
        return {
            countTime:0,
            name: "登录",
            phone: '',
            vcode: "",
            codeText: "发送验证码",
            roomID: "",
            flag: true,
            reCode: ""
        };
    },
    created() {

    },
    mounted() {
        // this.$refs.login_wap.style.height = document.body.clientHeight + "px";
        // console.log(document.body.clientHeight)
    },
    methods: {
        goPath(name){
            this.$router.push({name:name});
        },
        getVcode(phone) {
            let myreg = /^[1][3-9][0-9]{9}$/;
            if (!myreg.test(phone)) {
                this.$toast("请输入11位有效手机号码");
                return;
            } else if (this.flag) {
                let loop = 60;
                let vcodeText = this.codeText;
                let that = this;
                console.log(this.phone)
                this.$ajax
                    .post(this.$url.sendMsg, { mobile: this.phone })
                    .then(res => {
                        if (res.data && res.code == 200) {
                            this.reCode = res.data.msg;
                            this.flag = false;
                            let clock = setInterval(function () {
                                if (loop >= 0) {
                                    that.codeText = loop-- + " S";
                                } else {
                                    that.flag = true;
                                    that.codeText = vcodeText;
                                    clearInterval(clock);
                                }
                            }, 1000);
                        }
                    })
                    .catch(error => {
                        console.log(error);
                        console.log("请求失败");
                    });
            }
        },
        count(){
          this.countTime=60;
          let timeId=setInterval(()=> {
            this.countTime-=1;
            if(this.countTime==0){
              clearInterval(timeId);
            }
          },1000)
        }
    }
};
</script>
<style scoped lang="scss">
  .wrap{
    height: 100%;
    position: relative;
    background: #fff;
    z-index: 10;
    overflow-y: hidden;
    .input-form{
      box-shadow: 4px 4px 2px #AAAAAA;
      border-radius: 4px;
      width: 89%;
      height: 226px;
      position: absolute;
      left: 20px;
      .userWrap{
        width: 90%;
        margin: 0 auto;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #CFE0E7;
        .icon{
          width: 20px;
          margin: 0 10px 0 10px;
          color: gray;
          float: left;
          height: 100%;
          }
        .phone{
          float: left;
          width: 80%;
        }
      }
      .passwordWrap{
        width: 63%;
        margin: 25px 0 0 16px;
        float: left;
        border-bottom: 1px solid #CFE0E7;
        height: 30px;
        line-height: 30px;
        .icon{
          width: 20px;
          color: gray;
          float: left;
          margin: 0 10px 0 13px;
          height: 100%;
          vertical-align: middle;
          }
          .vCode{
            width: 75%;
            float: left;
          }
      }
      .button{
        margin:20px 20px 0 5px;
        background-color: #3bc468;
        color: #fff;
        float: right;
        border-radius: 4px;
        width: 80px;
        height: 36px;
      }
      
      
    }
    .login-btn{
      width: 280px;
      height: 42px;
      line-height: 42px;
      background-image: linear-gradient(90deg, #3EECAE 0%, #09AED1 100%);
      border-radius: 22.5px;
      position: absolute;
      top: 64.1%;
      left: 12.5%;
      text-align: center;
      .login-msg{
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
      }
      
    }
    .register{
      text-align: center;
      margin-top: 69%;
      .register-msg{
        font-family: PingFangSC-Regular;
        font-size: 14px;
        color: #0CB2CF;
        letter-spacing: 0;
      }
    }
    .copyContent{
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 90px auto;
      text-align: center;
      width: 39.5%;
      height: 10.6%;
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #A3A3A3;
      letter-spacing: 0;
      text-align: center;
      .icon{
        display: block;
        width: 100%;
        font-size: 22px;
        color: black;
      }
      .copymsg{
        display: block;
        height: 20px;
        line-height: 20px;
      }
     
    }
  }
  
</style>
