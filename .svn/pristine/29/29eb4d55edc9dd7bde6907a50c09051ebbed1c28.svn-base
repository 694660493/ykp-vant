<template>
  <div class="wrap">
    <div class="topWrap">
      <invoiceTop :title='invoiceTopMsg'></invoiceTop>
      <div class="invoiceToggle">
        <span>收入发票</span>
        <span>成本发票</span>
      </div>
    </div>
    <div class="invoiceDetailItems">
      <span class="dItem">序号</span>
      <span class="dItem">所属期</span>
      <span class="dItem">发票数量</span>
      <span class="dItem">文件</span>
    </div>
    <div class="invoiceDetailArr">
      <div class="invoiceItem">
        <div class="section_one">
          <span class="itemNum">1</span>
          <span class="itemData">2018-05</span>
          <span class="invoiceNum">--</span>
          <img src="../../assets/img/invoice_detail_img01.svg" alt="" class="invoiceImg" >
        </div>
        <div class="section_two">
          <span class="itemNum">1</span>
          <span class="itemData">2018-05</span>
          <span class="invoiceNum">7</span>
          <img src="../../assets/img/invoice_detail_img01.svg" alt="" class="invoiceImg" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        invoiceTopMsg:"发票采集"
      }
    }
  }
</script>

<style scoped lang='scss'>
  .wrap{
    height: 100%;
    .topWrap{
      height: 149px;
      background-image: linear-gradient(90deg, #3EECAE 0%, #09AED1 100%);
      .invoiceToggle{
        height: 85px;
        span{
          font-family: PingFangSC-Regular;
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: -0.38px;
          text-align: center;
          margin-left: 85.8px;
          margin-right: 38.4px;
        }
      }
    }
    .invoiceDetailItems{
      padding: 0 10px 0 10px;
      width: 94.7%;
      height: 52px;
      box-sizing: border-box;
      margin-left: 10.1px;
      line-height: 52px;
      background-color: #fff;
      margin-top: -26px;
      box-shadow: 0 1px 4px 0 #EFEFEF;
      border-radius: 4px;
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
    .invoiceDetailArr{
      width: 94.7%;
      margin: 10px auto;
      .invoiceItem{
        width: 100%;
        .section_one{
          width: 100%;
          height: 60px;
          line-height: 60px;
          display: flex;
          justify-content: space-between;
          padding: 0 10px 0 10px;
          box-sizing: border-box;
          img{
            background: no-repeat ;width:26px;height: 60px
          }
        }
        .section_two{
          width: 100%;
          height: 60px;
          line-height: 60px;
          display: flex;
          justify-content: space-between;
          padding: 0 10px 0 10px;
          box-sizing: border-box;
          img{
            background: no-repeat ;width:26px;height: 60px
          }
        }
      }
    }
    
  }
</style>
