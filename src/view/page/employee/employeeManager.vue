<template>
  <div class="em_salary">
    <div class="em_header">
        <div class="num">序号</div>
        <div class="name">姓名</div>
        <div class="salary">工资</div>
        <div class="social_security">社保</div>
        <div class="public_money">公积金</div>
    </div>
    <ul class="em_body">
      <router-link class="em_item"  :to="{name: 'emSalaryDetail'}" tag="li">
        <div class="num">1</div>
        <div class="name">李辞</div>
        <div class="salary">111600.00</div>
        <div class="social_security"><van-radio name="1"></van-radio></div>
        <div class="public_money"><van-radio-group v-model="radio"><van-radio name="1"></van-radio></van-radio-group></div>
      </router-link>
      <li class="em_item">
        <div class="num">1</div>
        <div class="name">李辞</div>
        <div class="salary">111600.00</div>
        <div class="social_security"><van-radio name="1"></van-radio></div>
        <div class="public_money"><van-radio-group v-model="radio"><van-radio name="1"></van-radio></van-radio-group></div>
      </li>
      <li class="em_item">
        <div class="num">1</div>
        <div class="name">李辞</div>
        <div class="salary">111600.00</div>
        <div class="social_security"><van-radio name="1"></van-radio></div>
        <div class="public_money"><van-radio-group v-model="radio"><van-radio name="1"></van-radio></van-radio-group></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name:"employeeManager",
  data() {
    return {
      radio:'1'
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
.name{
  width: 60px;
  text-align: center
}
.salary{
  width: 70px;
  text-align: center
}
.social_security{
  width: 30px;
  text-align: center
}
.public_money{
  width: 45px;
  text-align: center
}
</style>
<style>
.van-radio__input{
  height:50px !important ;
}
</style>
