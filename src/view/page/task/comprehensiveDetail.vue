<template>
  <div class="comprehensiveDetail">
    <div class="navbar"></div>
    <div class="detail_body">
      <div class="items">
        <div class="tit"><van-icon name="hotel-o" /></div>
        <div class="left">
          <h2>注册公司</h2>
          <p>最新任务预估完成时间：2018-11-12 12:1:12</p>
        </div>
      </div>
      <div class="all_staps">
        <div class="limit">
          <van-steps icon="close" direction="vertical" :active="0">
            <van-step>
              <h3>已签收</h3>
              <p>【深圳市】已签收，签收人是702办公室女同事张女士，12854521正在为你派件</p>
            </van-step>
            <van-step icon="question">
              <h3>已签收</h3>
              <p>【深圳市】已签收，签收人是702办公室女同事张女士，12854521正在为你派件</p>
              <div class="time">12-05<br>18:33</div>
            </van-step>
            <van-step>
              <h3>已签收</h3>
              <p>【深圳市】已签收，签收人是702办公室女同事张女士，12854521正在为你派件</p>
            </van-step>
            <van-step>
              <h3>已签收</h3>
              <p>【深圳市】已签收，签收人是702办公室女同事张女士，12854521正在为你派件</p>
            </van-step>
            <van-step>
              <h3>已签收</h3>
              <p>【深圳市】已签收，签收人是702办公室女同事张女士，12854521正在为你派件</p>
            </van-step>
          </van-steps>

        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:"comprehensiveDetail",
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
.comprehensiveDetail{
    background-color: #f9f9f9;
    height: 600px;
    flex: 1;
    overflow: auto;
}
.navbar{
  background-image: linear-gradient(-90deg, #0AAFD1 0%, #09AED1 100%);
  height: 100px;
  width: 100%;
}
.detail_body{
  margin-top: -90px;
  width: 355px;
  margin-left: 10px;
  background: #FFFFFF;
  overflow: hidden;
}
.items{
  background: #FFFFFF;
  box-shadow: 0 1px 4px 0 #EFEFEF;
  border-radius: 4px;
  width: 355px;
  height: 75px;
  margin: 15px auto 0;
}
.tit{
  float: left;
  width: 75px;
  height: 75px;
  text-align: center;
  line-height: 75px;
  color: #0AAFD0;
  font-size: 38px;
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
  font-size: 16px;
  height: 50px;
  color: #313131;
  letter-spacing: 0;
  text-align: left;
}
.left{
  float: left;
}
.all_staps{
  border-top:1px dashed #D8D8D8;
}
.limit{
  width: 290px;
  float: right;
  position: relative;
  right: 0;
  overflow: visible;
  /* margin-left: 65px; */
}
.limit h3{
  font-family: PingFangSC-Regular;
  font-size: 14px;
  color: #313131;
}
.limit p{
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #A3A3A3;
}
.time{
  position:absolute;
  width: 45px;
  height: 35px;
  font-family: PingFangSC-Regular;
  font-size: 10px;
  color: #A3A3A3;
  left: -60px;
  top: 10px;
  z-index: 9999;
}
</style>
<style>
.comprehensiveDetail .van-step__title{
  position: relative;
}
.comprehensiveDetail .van-steps{
  overflow:visible !important;
}
</style>
