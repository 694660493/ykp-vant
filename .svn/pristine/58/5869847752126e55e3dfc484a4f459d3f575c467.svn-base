<template>
  <div class="socialSecurityEdit">
    <div class="uploadForm">
      <div class="item">
        <van-field v-model="uploadForm.name" type="text" label="所属期"/>
      </div>
      <div class="item">
        <div class="labal">图片上传</div>
        <div class="items_pic">
          <van-uploader class="upload" :after-read="onRead" accept="image/gif, image/jpeg" multiple>
            <van-icon name="add-o" size="40px" color="#D8D8D8" />
          </van-uploader>
        </div>
      </div>
      <div class="item"><van-field v-model="uploadForm.name" type="textarea" label="备注"/></div>
    </div>
    <div class="etit_history">
      <h3>修改记录</h3>
      <div class="item"><div class="labal">创建人</div><div class="item_value">李辞</div></div>
      <div class="item"><div class="labal">创建时间</div><div class="item_value">2018年12月11日 17:32:31</div></div>
      <div class="item"><div class="labal">最后修改人</div><div class="item_value">客户</div></div>
      <div class="item"><div class="labal">最后修改时间</div><div class="item_value">2018年12月11日 17:32:31</div></div>
    </div>
    <div class="btn"><van-button type="default">确认修改</van-button></div>
  </div>
</template>
<script>
export default {
  name:"socialSecurityEdit",
  data() {
    return {
      uploadForm:{
        name:''
      }
    }
  }
}
</script>
<style scoped>
html,body{
    height: 100%;
}
.socialSecurityEdit{
    background-color: #f9f9f9;
    height: 600px;
    flex: 1;
    overflow: auto;
}
.item{
  display: flex;
}
.labal{
  width: 90px;
  padding-left: 15px;
}
.items_pic{
  background: #D8D8D8;
  display: flex;
  padding-bottom: 6px;
  /* justify-content: space-around; */
  width: 265px;
  /* height: 265px; */
}
.upload{
  width: 80px;
  height: 80px;
  line-height: 115px;
  text-align: center;
  background: #FFFFFF;
  border: 1px dashed #D8D8D8;
}
.etit_history{
  width: 355px;
  margin: 10px auto 0;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  border-radius: 4px;
}
h3{
  height: 36px;
  line-height: 36px;
  margin-left: 10px;
  font-family: PingFangSC-Medium;
  font-size: 12px;
  color: #7D7D7D;

}
.item{
  display: flex;
  background: #FAFAFA;
  border: 1px solid #F1F1F1;
  width: 345px;
  margin: 0 auto;
}
.labal{
  width: 60px;
  overflow: hidden;
  white-space: pre-wrap;
  padding: 14px 0;
  margin: 0 20px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #313131;
}
.item_value{
  padding-top: 14px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #7D7D7D;
}
.btn{
  width: 100%;
}
</style>
<style>
.socialSecurityEdit .van-cell__value{
  border: 1px solid #969799;
  border-radius:2px;
}
.socialSecurityEdit .van-button--normal{
  padding:0;
  background-image: linear-gradient(-90deg, #3EECAE 0%, #09AED1 100%);
  box-shadow: 0 -2px 4px 0 #D3D3D3;
  border-radius: 4px;
  width:370px;
  margin-left:2.5px;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #FFFFFF;
}

</style>
