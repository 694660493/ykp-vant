<template>
  <div class="comprehensiveTask">
    <div class="detail_body">
      <router-link :to="{name: 'comprehensiveDetail'}" class="items">
        <div class="tit">司</div>
        <div class="left">
          <h2>注册公司</h2>
          <p>2018-12-06</p>
        </div>
        <div class="right">
          <h2>未开始</h2>
        </div>
      </router-link>
      <div class="items">
        <div class="tit">司</div>
        <div class="left">
          <h2>注册公司</h2>
          <p>2018-12-06</p>
        </div>
        <div class="right">
          <h2>未开始</h2>
        </div>
      </div>
      <div class="items">
        <div class="tit">司</div>
        <div class="left">
          <h2>注册公司</h2>
          <p>2018-12-06</p>
        </div>
        <div class="right">
          <h2>未开始</h2>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"comprehensiveTask",
  data() {
    return {
      // active:1
    }
  }
}
</script>
<style scoped>
html,body{
    height: 100%;
}
  /* .comprehensiveTask{
      background-color: #f9f9f9;
      height: 600px;
      flex: 1;
      overflow: auto;
  } */
.detail_body{
  margin: -50px auto 0;
}
.items{
  display: block;
  text-decoration: none;
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  border-radius: 4px;
  width: 355px;
  height: 75px;
  margin: 15px auto;
}
.tit{
  float: left;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  overflow: hidden;
  margin: 18px;
  background: #0AAFD0;
  text-align: center;
  line-height: 36px;
  color: #FFFFFF;
  font-size: 20px;
}
.left p{
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #A3A3A3;
  letter-spacing: 0;
  text-align: left;
}
.left h2{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #313131;
  letter-spacing: 0;
  text-align: left;
}
.left{
  float: left;
}
.right{
  float: right;
  margin-right: 18px;
}
.right h2{
  padding: 0;
  margin: 0;
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #2FC463;
  letter-spacing: 0;
  text-align: right;
  height: 75px;
  line-height: 75px;
}
</style>
