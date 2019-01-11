<template>
  <div class="em_salary">
    <div class="em_header">
        <div class="num">序号</div>
        <div class="time">所属期</div>
        <div class="em_num">员工数量</div>
        <div class="total">工资总额</div>
        <div class="icon"></div>
    </div>
    <ul class="em_body">
      <router-link class="em_item"  :to="{name: 'salaryTable'}" tag="li">
        <div class="num">1</div>
        <div class="time">2018-06</div>
        <div class="em_num">6</div>
        <div class="total">121551</div>
        <div class="icon"><van-icon name="arrow" /></div>
      </router-link>
      <li class="em_item">
        <div class="num">1</div>
        <div class="time">2018-06</div>
        <div class="em_num">6</div>
        <div class="total">121551</div>
        <div class="icon"><van-icon name="arrow" /></div>
      </li><li class="em_item">
        <div class="num">1</div>
        <div class="time">2018-06</div>
        <div class="em_num">6</div>
        <div class="total">121551</div>
        <div class="icon"><van-icon name="arrow" /></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"salaryDetail",
  components: {

  },
  data() {
    return {
      active:1
    }
  }
}
</script>
<style scoped>
.em_header{
  width: 355px;
  height: 50px;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  border-radius: 4px;
  margin: -35px auto 0;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
}
.em_body{
  margin: 10px auto 0;
  width: 355px;
  border-radius: 4px;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
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
