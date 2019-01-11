<template>
  <div class="wrap">
    <div class="topWrap">
      <invoiceTop :title='invoiceTopMsg'></invoiceTop>
      <div class="invoiceToggle">
        <div class="toggleItem" @click="toggle">
          <span>
            收入发票
          </span>
          <div class="line"></div>
        </div>
  
        <div class="toggleItem" @click="toggle">
          <span>
            成本发票
          </span>
          <div class="line"></div>
        </div>
      </div>
    </div>
    <invoiceDetailItems :content="content"></invoiceDetailItems>
    <invoiceDetailArr :arrContent="arrContent"></invoiceDetailArr>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        invoiceTopMsg:"发票采集",
        content:["序号","所属期","发票数量","文件"],
        arrContent:[{num:"1",date:"2018-06",totalNum:"0",file:"../../static/img/upload_file.png"},
          {num:"1",date:"2018-06",totalNum:"0",file:"../../static/img/invoice_detail_img01.svg"}]
      }
    },
    methods:{
      toggle:function (event) {
          document.querySelectorAll(".line").forEach(function (element,index) {
            element.style.display="none";
          })
          event.currentTarget.lastChild.style.display="block";
        
      }
    }
  }
</script>

<style scoped lang='scss'>
  .wrap{
    height: 100%;
    background-color: #f6faff;
    .topWrap{
      height: 149px;
      background-image: linear-gradient(90deg, #3EECAE 0%, #09AED1 100%);
      .invoiceToggle{
        height: 85px;
        display: flex;
        justify-content: space-around;
        padding-top: 10px;
        align-items: flex-start;
        .toggleItem{
          span{
            font-family: PingFangSC-Regular;
            font-size: 16px;
            color: #FFFFFF;
            letter-spacing: -0.38px;
            text-align: center;
          }
          .line{
            display: none;
            width: 58px;
            height: 2px;
            background: #FFFFFF;
            border-radius: 1.5px;
          }
        }
      }
    }
    
  }
</style>
