<template>
  <div class="salary_table">
    <div class="sal_table_head">
      <div class="num">序号</div>
      <div class="name">姓名</div>
      <div class="salary">基本工资</div>
      <div class="day_num">出勤天数</div>
      <div class="reward">奖金补贴</div>
    </div>
    <div class="sal_table_body">
      <div class="num">1</div>
      <div class="name">李辞</div>
      <div class="salary">125426.215</div>
      <div class="day_num">22天</div>
      <div class="reward">124588.214</div>
    </div>
    <div class="sal_table_foot">
      <div class="num"></div>
      <div class="name">总计</div>
      <div class="salary">567.21</div>
      <div class="day_num">- -</div>
      <div class="reward">132123.21</div>
    </div>
  </div>
</template>
<script>
export default {
  name:"salaryTable",
  data() {
    return {

    }
  }
}
</script>
<style scoped>
.sal_table_head{
  color: #313131;
  width: 100%;
  height: 50px;
  background: #F9F9F9;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
}
.sal_table_body{
  width: 100%;
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
}
.sal_table_foot{
  width: 100%;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  height: 50px;
  line-height: 50px;
  background: #FAFAFA;
  border-top: 1px solid #E0E0E0;
  box-shadow: 0 -1px 4px 0 #E0E0E0;
}
.em_body :nth-child(1){
  border-top: 0
}
.em_item{
  width: 355px;
  border-top: 1px solid #EFEFEF;
  display: flex;
  justify-content: space-around;
  height: 50px;
  line-height: 50px;
}
.num{
  width: 30px;
  text-align: center
}
.time{
  width: 80px;
  text-align: center
}
.em_num{
  width: 56px;
  text-align: center
}
.total{
  width: 56px;
  text-align: center
}
.icon{
  width: 10px;
  text-align: center
}
</style>
