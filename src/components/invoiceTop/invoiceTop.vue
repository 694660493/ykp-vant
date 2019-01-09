<template>
  <div class="invoiceTop" :style="{backgroundColor:bg_color }">
    <div class="backItem">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fanhui"></use>
      </svg>
      <span class="backMsg">返回</span>
    </div>
    <span class="header">{{title}}</span>
  </div>
</template>

<script>
  //这是头部组件，包括返回，头部字符 (适用于1.4.1, 1.5.1, 1.6.1 ,1.7.1, 1.8.1 , 1.9.1, 1.10.1)
    export default {
        props:{
          title:String, //标题名称
          bg_color:String  //主体背景颜色
        },
        data() {
            return {
            
            }
        },
        
    }
</script>

<style scoped lang='scss'>
  .invoiceTop{
    padding-top: 20px;
    height: 44px;
    line-height: 44px;
    text-align: center;
    .backItem{
      position: absolute;
      left: 20px;
      display: flex;
      align-items: center;
      .icon{
        vertical-align: middle;
        color: #FFFFFF;
        font-size: 18px;
        margin-top: 3px;
      }
      .backMsg{
        margin-left: 3px;
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
      text-align: center;;
    }
  }
</style>
