<template>
  <div class="employee">
    <div class="head">
      <div class="go_back" @click="goback"><van-icon name="arrow-left"/>返回</div>
      <div class="tit">员工工资</div>
      <router-link  :to="{name: 'addEmployee'}" class="add"><van-icon name="add-o"/></router-link>
    </div>
    <nav class="tabbar">
        <router-link :to="{name: 'salaryDetail'}">工资明细</router-link>
        <router-link :to="{name: 'employeeManager'}">员工管理</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import { Tab, Tabs } from 'vant';
export default {
  name:"employee",
  components: {

  },
  data() {
    return {
      // active:1
    }
  },
  methods:{
    goback (){
      this.$router.back(-1)
    }
  }
}
</script>
<style scoped>
  html,body{
        height: 100%;
    }
    .employee{
        background-color: #f9f9f9;
        height: 600px;
        flex: 1;
        overflow: auto;
    }
    .head{
      background-image: linear-gradient(-90deg, #3EECAE 0%, #09AED1 100%);
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
    .add{
      text-decoration: none;
      float: right;
      margin-right: 10px;
      color: #FFFFFF;
    }
    .tabbar{
      background-image: linear-gradient(-90deg, #3EECAE 0%, #09AED1 100%);
      height: 85px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
    }
    .tabbar a{
      display: block;
      width: 65px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 16px;
      color: #ffffff;
      box-sizing: border-box;
    }
    .tabbar .router-link-active{
      border-bottom: 3px solid #ffffff;
    }
</style>
<style>
.head .van-icon, .van-icon::before{
  top:4px !important;
  font-size:18px !important;
}
</style>
