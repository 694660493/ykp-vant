<template>
  <div>
    <div class="em_detail">
      <h3>基础信息</h3>
      <div class="item"><div class="labal">姓名</div><div class="item_value">张三</div></div>
      <div class="item"><div class="labal">性别</div><div class="item_value">男</div></div>
      <div class="item"><div class="labal">证件类型</div><div class="item_value">身份证</div></div>
      <div class="item"><div class="labal">证件号码</div><div class="item_value">51132215585222122</div></div>
      <div class="item"><div class="labal">工作资金</div><div class="item_value">123123.21</div></div>
      <div class="item"><div class="labal">工资发放开始月份</div><div class="item_value">7月份</div></div>
      <div class="item"><div class="labal">是否购买社保</div><div class="item_value">是</div></div>
      <div class="item"><div class="labal">基本医疗保险费</div><div class="item_value">2121</div></div>
      <div class="item"><div class="labal">事业保险费</div><div class="item_value">212</div></div>
      <div class="item"><div class="labal">是否购买公积金</div><div class="item_value">是</div></div>
      <div class="item"><div class="labal">住房公积金</div><div class="item_value">2121</div></div>
      <div class="item"><div class="labal">备注</div><div class="item_value">干得漂亮</div></div>
    </div>
    <div class="etit_history">
      <h3>修改记录</h3>
      <div class="item"><div class="labal">创建人</div><div class="item_value">李辞</div></div>
      <div class="item"><div class="labal">创建时间</div><div class="item_value">2018年12月11日 17:32:31</div></div>
      <div class="item"><div class="labal">最后修改人</div><div class="item_value">客户</div></div>
      <div class="item"><div class="labal">最后修改时间</div><div class="item_value">2018年12月11日 17:32:31</div></div>
    </div>
    <div class="tips">
      温馨提示：本地区月平均工资为：8338.00元，工资超过5000.00元将扣除个人所得税（自定义字段）
    </div>
  </div>
</template>
<script>
export default {
  name:"emSalaryDetail",
  data() {
    return {

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
.etit_history{
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
.item{
  display: flex;
}
.item_value{
  padding-top: 14px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #7D7D7D;
}
</style>
