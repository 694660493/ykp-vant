<template>
  <div class="socialSecurityUpload">
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
    <div class="tips">
      温馨提示：本地区月平均工资为：8338.00元，工资超过5000.00元将扣除个人所得税（自定义字段）
    </div>
    <div class="btn"><van-button type="default">上传</van-button></div>
  </div>
</template>
<script>
export default {
  name:"socialSecurityUpload",
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
.socialSecurityUpload{
    background-color: #f9f9f9;
    height: 600px;
    flex: 1;
    overflow: auto;
}
.tips{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #7D7D7D;
  letter-spacing: 0;
  line-height: 14px;
  width: 320px;
  margin: 10px auto 15px;

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
</style>
<style>
.socialSecurityUpload .van-cell__value{
  border: 1px solid #969799;
  border-radius:2px;
}
.socialSecurityUpload .van-button--normal{
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