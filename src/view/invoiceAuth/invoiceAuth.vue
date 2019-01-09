<template>
  <div class="wrap">
    <div class="topWrap">
      <invoiceTop :title="invoiceTopMsg"></invoiceTop>
    </div>
    <invoiceDetailItems :content="content"></invoiceDetailItems>
    <invoiceDetailArr :arrContent="arrContent"></invoiceDetailArr>
  </div>
</template>

<script>
    export default {
        data() {
            return {
              invoiceTopMsg:"社保明细",
              content:["序号","所属期","张数","状态","文件"],
              arrContent:[
                {num:"1",date:"2018-06",totalPages:"0",state:"已上传",file:"../../static/img/upload_file.png"},
                {num:"1",date:"2018-06",totalPages:"0",state:"已上传",file:"../../static/img/upload_file.png"},
                {num:"1",date:"2018-06",totalPages:"0",state:"已上传",file:"../../static/img/upload_file.png"}
                ]
            }
        }
    }
</script>

<style scoped lang='scss'>
  .wrap{
    width: 100%;
    background-color: #f6faff;
    .topWrap{
      height: 98px;
      background-image: linear-gradient(90deg, #3EECAE 0%, #09AED1 100%);
    }
  }
</style>
