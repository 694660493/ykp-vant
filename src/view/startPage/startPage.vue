<template>
  <div class="wrap">
    <img class="main-content" src="../../assets/img/start_bg.png"/>
    <span class="message">财税管理，一步到位</span>
  </div>
</template>

<script>
   export default {
        data() {
            return {}
        },
        mounted(){
          //需要设置跳转时间 ，可以商量
          setTimeout(()=> {
            this.$router.replace({path:"/login"})
          },2000)
        }
    }
</script>

<style scoped lang='scss'>
  .wrap {
    height: 100%;
    position: relative;
    z-index: 10;
    background-image: linear-gradient(135deg, #3EECAE 0%, #09AED1 100%);
    .main-content {
      width: 75.9%;
      height: 40.2%;
      position: absolute;
      top: 21.3%;
      right: 12.3%;
    }
    .message{
      position: absolute;
      width: 49.3%;
      height: 4.2%;
      font-family: PingFangSC-Regular;
      font-size: 20px;
      color: #FFFFFF;
      letter-spacing: 0;
      top: 66.6%;
      right: 25.5%;
    }
  }
</style>
