<template>
  <div>
    <div class="head">
      <div class="go_back" @click="goback"><van-icon name="arrow-left"/>返回</div>
      <div class="tit">新增员工</div>
    </div>
    <div class="em_detail">
      <h3 >基础信息</h3>
      <div class="item"><van-field v-model="addForm.name" type="text" label="姓名" required/></div>
      <div class="item" @tap="onSelect"><van-field v-model="addForm.name" type="text" label="性别" icon="arrow-down" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="证件类型" icon="arrow-down" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="证件号码" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="工资金额" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="工资开始发放月份" icon="notes-o" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="是否购买社保" icon="arrow-down" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="基本医疗保险" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="事业保险费" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="是否购买公积金" icon="arrow-down" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="text" label="住房公积金" required/></div>
      <div class="item"><van-field v-model="addForm.name" type="textarea" label="备注" required/></div>
    </div>
    <div class="tips">
      温馨提示：本地区月平均工资为：8338.00元，工资超过5000.00元将扣除个人所得税（自定义字段）
    </div>
    <van-actionsheet v-model="show" title="支持以下配送方式">
  <p>一些内容</p>
</van-actionsheet>
    <div class="btn"><van-button type="default">确认</van-button></div>
  </div>
</template>
<script>
export default {
  name:"addEmployee",
  data() {
    return {
      addForm:{
        name:''
      },
      show: false,
      actions: [
        {
          name: '选项'
        },
        {
          name: '选项',
          subname: '描述信息'
        },
        {
          loading: true
        },
        {
          name: '禁用选项',
          disabled: true
        }
      ]
    }
  },
  methods:{
    goback (){
      this.$router.back(-1)
    },
    onSelect (){
      console.log("asdf")
      this.show = false;
    }
  }
}
</script>
<style scoped>
.em_detail{
  width: 355px;
  margin: 10px auto 0;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  border-radius: 4px;
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
.head{
  background: #0AAFD0;
  width: 100%;
  height: 44px;
  line-height: 44px;
}
.go_back{
  margin-left: 10px;
  float: left;
  font-family: PingFangSC-Regular;
  font-size: 16px;
  color: #FFFFFF;
}
.tit{
  font-family: PingFangSC-Regular;
  font-size: 18px;
  color: #FFFFFF;
  position:absolute;
  left: 50%;
  margin-left: -35px
}
</style>
<style>
.van-cell__value{
  border: 1px solid #969799;
  border-radius:2px;
}
.van-button--normal{
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
.head .van-icon, .van-icon::before{
  top:4px !important;
  font-size:18px !important;
}
</style>

