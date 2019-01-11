<template>
    <div class="wrap">
      <div class="top">
        <invoiceTop :title="title"></invoiceTop>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-yun"></use>
        </svg>
      </div>
      <invoiceDetailItems :content="content"></invoiceDetailItems>
      <invoiceDetailArr :arrContent="arrContent"></invoiceDetailArr>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              title:"资产负债表",
              content:["序号","所属期","文件"],
              arrContent:[
                {num:"1",date:"2018-01",file:"../../static/img/pdf_bg.png"},
                {num:"2",date:"2018-01",file:"../../static/img/pdf_bg.png"},
                {num:"3",date:"2018-01",file:"../../static/img/pdf_bg.png"},
                {num:"4",date:"2018-01",file:"../../static/img/pdf_bg.png"},
                {num:"5",date:"2018-01",file:"../../static/img/pdf_bg.png"},
                {num:"6",date:"2018-01",file:"../../static/img/pdf_bg.png"},
                {num:"7",date:"2018-01",file:"../../static/img/pdf_bg.png"},
                {num:"8",date:"2018-01",file:"../../static/img/pdf_bg.png"},
                {num:"9",date:"2018-01",file:"../../static/img/pdf_bg.png"},
              ]
            }
        }
    }
</script>

<style scoped lang='scss'>
  .wrap{
    width: 100%;
    background-color: #f6faff;
    .top{
      height: 98px;
      background-image: linear-gradient(90deg, #3EECAE 0%, #09AED1 100%);
      .icon{
        position: absolute;
        font-size: 16px;
        top: 34px;
        right: 20px;
        color: #fff;
        
      }
      
    }
  }
</style>
