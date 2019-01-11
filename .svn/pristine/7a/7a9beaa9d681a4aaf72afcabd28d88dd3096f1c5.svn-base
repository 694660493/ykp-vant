<template>
  <div class="invoiceTop" :style="{backgroundColor:bg_color }">
    <div class="backItem">
      <span class="back"><</span>
      <span class="backMsg">返回</span>
    </div>
    <span class="header">{{title}}</span>
  </div>
</template>

<script>
    //这是头部组件
    export default {
        data() {
            return {
            
            }
        },
        props:{
          title:String,
          bg_color:String
        }
    }
</script>

<style scoped lang='scss'>
  .invoiceTop{
    position: relative;
    padding-top: 20px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    .backItem{
      position: absolute;
      left: 20px;
      .back{
        color: #FFFFFF;
      }
      .backMsg{
        font-family: PingFangSC-Regular;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: -0.38px;
        text-align: left;
      }
    }
    .header{
      font-family: PingFangSC-Regular;
      font-size: 18px;
      color: #FFFFFF;
      letter-spacing: -0.43px;
      text-align: center;
    }
  }
</style>
