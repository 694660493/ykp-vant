<template>
  <div class="invoiceDetailItems">
    <span class="dItem" v-for="(item,index) in content">
      {{item}}
    </span>
    
  </div>
</template>

<script>
    //这是中部分项组件（序号，所属期，发票数量，文件）(适用于1.4.1, 1.5.1, 1.6.1 ,1.7.1, 1.8.1 , 1.9.1)
    export default {
        props:{
          content:Array //文件项列表
        },
        data() {
            return {}
        },
        
    }
</script>

<style scoped lang='scss'>
  .invoiceDetailItems{
    z-index: 10;
    padding: 0 15px 0 15px;
    width: 94.7%;
    height: 52px;
    box-sizing: border-box;
    margin-left: 10.1px;
    background-color: #fff;
    margin-top: -26px;
    box-shadow: 0 1px 4px 0 #EFEFEF;
    border-radius: 4px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    .dItem{
      font-family: PingFangSC-Regular;
      font-size: 12px;
      color: #313131;
      letter-spacing: 0;
      text-align: left;
    }
  }
</style>
